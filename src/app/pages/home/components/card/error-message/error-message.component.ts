import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../../../services/quote-api.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  constructor(private quoteApiService : QuoteApiService) { }

  restartRequests():void {
    this.quoteApiService.restartRequests();
  }

}
