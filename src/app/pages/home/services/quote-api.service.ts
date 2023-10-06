import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, delay, interval, switchMap, timer } from 'rxjs';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  public timeToReload:number = 3 * 60 * 1000;

  constructor(private http:HttpClient) {}

  getQuotes(cod:string):Observable<Quote[]>{
    return this.http.get<Quote[]>(`https://economia.awesomeapi.com.br/${cod}`);
  }

}
