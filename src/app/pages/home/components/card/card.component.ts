import { Component, Input } from '@angular/core';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public quote:Quote = new Quote();

}
