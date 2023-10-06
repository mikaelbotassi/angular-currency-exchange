import { Injectable } from '@angular/core';
import { QuoteApiService } from '../../../services/quote-api.service';
import { BehaviorSubject, Observable, interval, switchMap } from 'rxjs';
import { Quote } from '../../../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class DolarCanadenseService {

  private _currency = new BehaviorSubject<Quote[]|null>(null);
  private _isLoading = new BehaviorSubject<boolean>(false);
  private _error = new BehaviorSubject<boolean>(false);

  constructor(private apiService:QuoteApiService) {

    interval(this.apiService.timeToReload)
      .pipe(switchMap(() => {
        this.isLoading = true;
        return this.getCurrency()
      }))
      .subscribe({
        next: (resp) => {
          this.currency = resp
          this.isLoading = false
          this.error = false
        },
        error: () => {
          this.isLoading = false
          this.error = true
          throw new Error('Unable to check the most current exchange rates for the Canadian dollar');
        }
    });

  }

  restartRequests():void{

    this.isLoading = true;

    this.getCurrency().subscribe({
      next: (resp) => {
        this.currency = resp
        this.isLoading = false
        this.error = false
      },
      error: () => {
        this.isLoading = false
        this.error = true
        throw new Error('Unable to check the most current exchange rates for the Canadian dollar');
      }
    });

    interval(this.apiService.timeToReload)
      .pipe(switchMap(() => {
        this.isLoading = true;
        return this.getCurrency()
      }))
      .subscribe({
        next: (resp) => {
          this.currency = resp
          this.isLoading = false
          this.error = false
        },
        error: () => {
          this.isLoading = false
          this.error = true
          throw new Error('Unable to check the most current exchange rates for the Canadian dollar');
        }
    });

  }

  getCurrency():Observable<Quote[]>{
    const observer = this.apiService.getQuotes("CAD");
    return observer;
  }

  get currency$(): Observable<Quote[]|null>{
    return this._currency.asObservable();
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }
  
  get error$(): Observable<boolean> {
    return this._error.asObservable();
  }

  set isLoading(value:boolean){
    this._isLoading.next(value);
  }
  
  set error(value:boolean){
    this._error.next(value);
  }

  set currency(value:Quote[]|null){
    this._currency.next(value);
  }

}
