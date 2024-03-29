import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

/*
* Components
*/
import { ListClientComponent } from './list-client/list-client.component';
import { ListComponent } from './list.component';
import { ListProductsComponent } from './list-products/list-products.component';

/*
* Services
*/
import { ListProductsService } from './services/list-products.service';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    ListClientComponent,
    ListProductsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    CoreModule
  ],
  providers: [
    ListProductsService
  ],
  exports: [
    ListComponent,
    ListClientComponent,
    ListProductsComponent,
  ]
})
export class ListModule { }
