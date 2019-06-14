import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSaleComponent } from './detail-sale/detail-sale.component';
import { SalesComponent } from './sales.component';

@NgModule({
  declarations: [DetailSaleComponent, SalesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SalesComponent,
    DetailSaleComponent
  ]
})
export class SalesModule { }
