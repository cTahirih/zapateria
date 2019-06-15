import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
  Components
* */
import { HomeComponent } from './home/home.component';
import { ListClientComponent } from './list/list-client/list-client.component';
import { SalesComponent } from './sales/sales.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import {ListProductsComponent} from './list/list-products/list-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'clients',
    component: ListClientComponent
  },
  {
    path: 'products',
    component: ListProductsComponent
  },
  { path: 'sales', component: SalesComponent },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
