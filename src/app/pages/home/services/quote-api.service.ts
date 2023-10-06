import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, delay, interval, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  private _list = new BehaviorSubject<any[]>([]);
  private _isLoading = new BehaviorSubject<boolean>(false);
  private _error = new BehaviorSubject<boolean>(false);
  time: number = 3 * 60 * 1000

  constructor(private http:HttpClient) {

    interval(this.time)
      .pipe(switchMap(() => {
        this.isLoading = true;
        return this.getQuotes()
      }))
      .subscribe({
        next: (resp) => {
          this.list = resp
          this.isLoading = false
          this.error = false
        },
        error: () => {
          this.isLoading = false
          this.error = true
          throw new Error('Unable to check the most current exchange rates');
        }
    });

  }

  restartRequests():void{

    this.isLoading = true;

    this.getQuotes().subscribe({
      next: (resp) => {
        this.list = resp
        this.isLoading = false
        this.error = false
      },
      error: () => {
        this.isLoading = false
        this.error = true
        throw new Error('Unable to check the most current exchange rates');
      }
    });

    interval(this.time)
      .pipe(switchMap(() => {
        this.isLoading = true;
        return this.getQuotes()
      }))
      .subscribe({
        next: (resp) => {
          this.list = resp
          this.isLoading = false
          this.error = false
        },
        error: () => {
          this.isLoading = false
          this.error = true
          throw new Error('Unable to check the most current exchange rates');
        }
    });

  }

  getQuotes(cod:string=""):Observable<any[]>{
    if(cod !== "")
      return this.http.get<any[]>(`https://economia.awesomeapi.com.br/${cod}`);

    return this.http.get<any[]>('https://economia.awesomeapi.com.br/kkkkkk')
    
    // return this.http.get<any[]>('https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL')
  }

  get list$(): Observable<any[]>{
    return this._list.asObservable();
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

  set list(value:any[]){
    this._list.next(value);
  }

}
