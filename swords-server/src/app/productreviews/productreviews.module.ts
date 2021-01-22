import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductreviewsRoutingModule } from './productreviews-routing.module';
import { ProductreviewsComponent } from './productreviews.component';
import { ProductrewiewsListComponent } from './productrewiews-list/productrewiews-list.component';


@NgModule({
  declarations: [ProductreviewsComponent, ProductrewiewsListComponent],
  imports: [
    CommonModule,
    ProductreviewsRoutingModule
  ]
})
export class ProductreviewsModule { }
