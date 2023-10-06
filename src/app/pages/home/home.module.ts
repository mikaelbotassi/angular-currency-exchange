import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RootHomeComponent } from './containers/root-home/root-home.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CardComponent } from './components/card/card.component';
import { QuoteApiService } from './services/quote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './components/card/error-message/error-message.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { DolarCanadenseComponent } from './features/dolar-canadense/dolar-canadense.component';
import { PesoArgentinoComponent } from './features/peso-argentino/peso-argentino.component';
import { LibraEsterlinaComponent } from './features/libra-esterlina/libra-esterlina.component';

const routes: Routes = [
  {
    path: '',
    component: RootHomeComponent,
    children: [
      {path: '', component: CurrencyListComponent}
    ]
  }
];

@NgModule({
  declarations: [
    RootHomeComponent,
    CardComponent,
    CurrencyListComponent,
    CardContentComponent,
    ErrorMessageComponent,
    DolarCanadenseComponent,
    PesoArgentinoComponent,
    LibraEsterlinaComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [QuoteApiService]
})
export class HomeModule { }
