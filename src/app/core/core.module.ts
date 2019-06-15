import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * Components
 */


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    LayoutModule

  ],
  exports: [
  ]
})
export class CoreModule { }

