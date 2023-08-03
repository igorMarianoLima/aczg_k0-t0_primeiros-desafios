import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class CoreModule { }
