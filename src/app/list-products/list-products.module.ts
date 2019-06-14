import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProductsComponent } from './list-products.component';

@NgModule({
  declarations: [ListClientComponent, ListProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListClientComponent,
    ListProductsComponent
  ]
})
export class ListProductsModule { }
