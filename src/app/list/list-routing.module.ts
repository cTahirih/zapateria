import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
  Components
* */
import { ListClientComponent } from './list-client/list-client.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
