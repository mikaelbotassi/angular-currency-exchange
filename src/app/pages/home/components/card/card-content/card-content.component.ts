import { Component, Input, OnInit } from '@angular/core';
import { QuoteApiService } from '../../../services/quote-api.service';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  public isLoading:boolean = false;
  public error:boolean = false;
  @Input() textColor:string = "";
  @Input() currency:string = "";
  @Input() percent:string = "";
  @Input() created_date:string = "";

  constructor(private quoteApiService : QuoteApiService) { }

  ngOnInit() {
    this.quoteApiService.isLoading$.subscribe({
      next: (isLoading) => this.isLoading = isLoading,
      error: () => { throw new Error('Unable to check if is loading')}
    })

    this.quoteApiService.error$.subscribe({
      next: (error) => {
        this.error = error
      },
      error: () => { throw new Error('Unable to check if has error')}
    })
  }

}
