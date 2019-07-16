import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HomeRoutingModule } from '../home/home-routing.module';
/**
 * Components
 */


@NgModule({
  declarations: [NotFoundComponent, ErrorMessageComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule
  ],
  exports: [
  ]
})
export class CoreModule { }

