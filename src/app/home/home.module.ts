import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule

} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    CardsComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
