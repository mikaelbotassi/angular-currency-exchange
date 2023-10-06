import { Component } from '@angular/core';
import { Quote } from 'src/app/pages/home/models/Quote';
import { DolarCanadenseService } from '../../services/dolar-canadense.service';

@Component({
  selector: 'app-dolar-canadense-card',
  templateUrl: './dolar-canadense-card.component.html',
  styleUrls: ['./dolar-canadense-card.component.scss']
})
export class DolarCanadenseCardComponent {
  public isLoading:boolean = false;
  public error:boolean = false;
  public currency:Quote = new Quote("Dólar Canadense");

  constructor(private currencyService:DolarCanadenseService){}

  ngOnInit(): void {
    this.currencyService.currency$.subscribe({
      next: (requestedCurrency) => {
        if(!requestedCurrency){
          this.currencyService.isLoading = true;
          this.currencyService.getCurrency().subscribe({
            next: (resp) => {
              this.currencyService.currency = resp
              this.currencyService.isLoading = false;
              this.currencyService.error = false
            },
            error: () => {
              this.currencyService.error = true;
              this.currencyService.isLoading = false;
              this.currencyService.error = true
              throw new Error('Unable to check the most current exchange rates for the Canadian dollar')
            }
          })
        } else{
          this.currency = requestedCurrency[0]
        }
      },
      error: () => { throw new Error('Unable to check the most current exchange rates for the Canadian dollar') }
    })

    this.currencyService.isLoading$.subscribe({
      next: (isLoading) => this.isLoading = isLoading,
      error: () => { throw new Error('Unable to check if is loading for the Canadian dollar')}
    })

    this.currencyService.error$.subscribe({
      next: (error) => {
        this.error = error
      },
      error: () => { throw new Error('Unable to check if has error for the Canadian dollar')}
    })

  }

  restartRequests(){
    this.currencyService.restartRequests();
  }

  getFormatedName():string{
    return this.currency.name.split("/")[0];
  }

  getformatedValue():string{
    return Number(this.currency.ask).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
  
  getformatedPercent():string{
    return this.currency.pctChange.replace(".", ",");
  }
  
  getformatedDate():string{
    return new Date(this.currency.create_date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  getTextColor():string{
    const ask = Number(this.currency.ask);
    if(ask <= 1) return 'text-red';
    if(ask <= 5) return 'text-green';
    return 'text-blue';
  }
}
