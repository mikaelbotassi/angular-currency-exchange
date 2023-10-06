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
  public isLoading:boolean = false;

  constructor(private quoteApiService : QuoteApiService){}

  ngOnInit(): void {

    this.quoteApiService.list$.subscribe({
      next: (quotes) => {
        if(!quotes || quotes.length == 0){
          this.quoteApiService.getQuotes().subscribe({
            next: (resp) => this.quoteApiService.list = resp,
            error: () => { throw new Error('Unable to check the most current exchange rates') }
          })
        } else{
          this.quotes = Object.values(quotes)
        }
      },
      error: () => { throw new Error('Unable to check the most current exchange rates') }
    })

    this.quoteApiService.isLoading$.subscribe({
      next: (isLoading) => this.isLoading = isLoading,
      error: () => { throw new Error('Unable to check if is loading')}
    })

  }

}
