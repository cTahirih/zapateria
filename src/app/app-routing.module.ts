import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
  Components
* */
import { HomeComponent } from './home/home.component';
import { ListClientComponent } from './list-products/list-client/list-client.component';
import { SalesComponent } from './sales/sales.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'clients',
    component: ListClientComponent,
    children: []
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
