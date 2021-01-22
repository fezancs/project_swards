import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialproductsRoutingModule } from './specialproducts-routing.module';
import { SpecialproductsComponent } from './specialproducts.component';


@NgModule({
  declarations: [SpecialproductsComponent],
  imports: [
    CommonModule,
    SpecialproductsRoutingModule
  ]
})
export class SpecialproductsModule { }
