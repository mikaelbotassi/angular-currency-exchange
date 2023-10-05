import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RootHomeComponent } from './containers/root-home/root-home.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';

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
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
