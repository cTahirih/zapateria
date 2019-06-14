import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SalesModule } from './sales/sales.module';
import { ListProductsModule } from './list-products/list-products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SalesModule,
    ListProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
