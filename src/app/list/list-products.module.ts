import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './list-client/list-client.component';
import { ListComponent } from './list.component';
import {ListProductsComponent} from './list-products/list-products.component';

@NgModule({
  declarations: [
    ListClientComponent,
    ListProductsComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListClientComponent,
    ListProductsComponent,
  ]
})
export class ListProductsModule { }
