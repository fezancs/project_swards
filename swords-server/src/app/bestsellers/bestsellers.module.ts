import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestsellersRoutingModule } from './bestsellers-routing.module';
import { BestsellersComponent } from './bestsellers.component';


@NgModule({
  declarations: [BestsellersComponent],
  imports: [
    CommonModule,
    BestsellersRoutingModule
  ]
})
export class BestsellersModule { }
