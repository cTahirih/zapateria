import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,

} from '@angular/material';
/*
Components
*/
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    CardsComponent,
    HomeComponent,
    SidenavComponent
  ]
})
export class HomeModule { }

