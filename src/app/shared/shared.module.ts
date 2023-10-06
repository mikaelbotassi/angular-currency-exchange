import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './icons/logo/logo.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LogoComponent, LoaderComponent],
  exports: [HeaderComponent, LoaderComponent]
})
export class SharedModule { }
