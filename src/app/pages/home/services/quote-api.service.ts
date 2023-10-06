import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, interval, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  private _list = new BehaviorSubject<any[]>([]);
  private _isLoading = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {
    interval(180000)
      .pipe(switchMap(() => {
        this.isLoading = true;
        return this.getQuotes()
      }))
      .subscribe({
        next: (resp) => {
          this.list = resp
          this.isLoading = false
        },
        error: () => {
          this.isLoading = false
          throw new Error('Unable to check the most current exchange rates');
        }
    });

  }

  getQuotes():Observable<any[]>{
    return this.http.get<any[]>('https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL')
  }

  get list$(): Observable<any[]>{
    return this._list.asObservable();
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  set isLoading(value:boolean){
    this._isLoading.next(value);
  }

  set list(value:any[]){
    this._list.next(value);
  }

}
