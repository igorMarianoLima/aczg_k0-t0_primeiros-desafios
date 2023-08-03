import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class CoreModule { }
