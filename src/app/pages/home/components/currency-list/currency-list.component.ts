import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../../services/quote-api.service';
import { Quote } from '../../models/Quote';
import { delay } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent {

  constructor(){}

}
