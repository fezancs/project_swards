import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotsalesRoutingModule } from './hotsales-routing.module';
import { HotsalesComponent } from './hotsales.component';


@NgModule({
  declarations: [HotsalesComponent],
  imports: [
    CommonModule,
    HotsalesRoutingModule
  ]
})
export class HotsalesModule { }
