import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './icons/logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LogoComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }
