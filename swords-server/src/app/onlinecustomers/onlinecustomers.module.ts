import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlinecustomersRoutingModule } from './onlinecustomers-routing.module';
import { OnlinecustomersComponent } from './onlinecustomers.component';


@NgModule({
  declarations: [OnlinecustomersComponent],
  imports: [
    CommonModule,
    OnlinecustomersRoutingModule
  ]
})
export class OnlinecustomersModule { }
