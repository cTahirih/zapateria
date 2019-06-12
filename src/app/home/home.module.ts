import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
Components
*/
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
