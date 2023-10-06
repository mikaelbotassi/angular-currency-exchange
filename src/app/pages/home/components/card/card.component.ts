import { Component, Input } from '@angular/core';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public quote:Quote = new Quote();
  @Input() public isLoading:boolean = false;

  getFormatedName():string{
    return this.quote.name.split("/")[0];
  }

  getformatedValue():string{
    return Number(this.quote.ask).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
  
  getformatedPercent():string{
    return this.quote.pctChange.replace(".", ",");
  }
  
  getformatedDate():string{
    return new Date(this.quote.create_date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  getTextColor():string{
    const ask = Number(this.quote.ask);
    if(ask <= 1) return 'text-red';
    if(ask <= 5) return 'text-green';
    return 'text-blue';
  }

}
