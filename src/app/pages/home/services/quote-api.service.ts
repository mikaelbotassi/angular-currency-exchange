import { Injectable } from '@angular/core';
import { HomeModule } from '../home.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  constructor(private http:HttpClient) {}

  getQuotes() : Observable<any[]>{
    return this.http.get<any[]>('https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL');
  }

}
