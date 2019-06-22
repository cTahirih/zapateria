import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

/* services */
import { ListProductsService } from './services/list-products.service';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ListProductsService
  ]
})
export class SharedModule { }
