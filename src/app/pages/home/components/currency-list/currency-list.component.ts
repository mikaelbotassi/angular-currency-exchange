import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../../services/quote-api.service';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  public quotes:Quote[] = [];

  constructor(private quoteApiService : QuoteApiService){}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(){
    this.quoteApiService.getQuotes().subscribe({
      next: (resp:any[]) => this.quotes = Object.values(resp),
      error: (err:any) => { throw new Error(err) }
    });
  }

}
