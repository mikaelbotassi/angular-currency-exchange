import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuoteApiService } from '../../../services/quote-api.service';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent{

  @Input() isLoading:boolean = false;
  @Input() error:boolean = false;
  @Input() textColor:string = "";
  @Input() currency:string = "";
  @Input() percent:string = "";
  @Input() created_date:string = "";
  @Output() restart:EventEmitter<any> = new EventEmitter();

  constructor() { }

  sendReloadToParent(){
    this.restart.emit(true);
  }

}
