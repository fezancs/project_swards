import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatedproductsRoutingModule } from './relatedproducts-routing.module';
import { RelatedproductsComponent } from './relatedproducts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RelatedproductsComponent],
  imports: [
    CommonModule,
    RelatedproductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class RelatedproductsModule { }
