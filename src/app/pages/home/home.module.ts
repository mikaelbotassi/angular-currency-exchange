import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RootHomeComponent } from './containers/root-home/root-home.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CardComponent } from './components/card/card.component';
import { QuoteApiService } from './services/quote-api.service';
import { HttpClientModule } from '@angular/common/http';

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
    CurrencyListComponent
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
