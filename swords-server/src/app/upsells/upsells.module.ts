import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpsellsRoutingModule } from './upsells-routing.module';
import { UpsellsComponent } from './upsells.component';


@NgModule({
  declarations: [UpsellsComponent],
  imports: [
    CommonModule,
    UpsellsRoutingModule
  ]
})
export class UpsellsModule { }
