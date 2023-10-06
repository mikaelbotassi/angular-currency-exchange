import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../../services/quote-api.service';
import { Quote } from '../../models/Quote';
import { delay } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  public quotes:Quote[] = [
    new Quote("Dólar Canadense"),
    new Quote("Peso Argentino"),
    new Quote("Libra Esterlina"),
  ];

  constructor(private quoteApiService : QuoteApiService){}

  ngOnInit(): void {
    this.quoteApiService.list$.subscribe({
      next: (quotes) => {
        if(!quotes || quotes.length == 0){
          this.quoteApiService.isLoading = true;
          this.quoteApiService.getQuotes().pipe(delay(3000)).subscribe({
            next: (resp) => {
              this.quoteApiService.list = resp
              this.quoteApiService.isLoading = false;
              this.quoteApiService.error = false
            },
            error: () => {
              this.quoteApiService.error = true;
              this.quoteApiService.isLoading = false;
              this.quoteApiService.error = true
              throw new Error('Unable to check the most current exchange rates')
            }
          })
        } else{
          this.quotes = Object.values(quotes)
        }
      },
      error: () => { throw new Error('Unable to check the most current exchange rates') }
    })

  }

}
