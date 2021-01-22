import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosssellsRoutingModule } from './crosssells-routing.module';
import { CrosssellsComponent } from './crosssells.component';


@NgModule({
  declarations: [CrosssellsComponent],
  imports: [
    CommonModule,
    CrosssellsRoutingModule
  ]
})
export class CrosssellsModule { }
