import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageordersRoutingModule } from './manageorders-routing.module';
import { ManageordersComponent } from './manageorders.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { VieworderdetalsComponent } from './vieworderdetals/vieworderdetals.component';


@NgModule({
  declarations: [ManageordersComponent, ViewordersComponent, VieworderdetalsComponent],
  imports: [
    CommonModule,
    ManageordersRoutingModule
  ]
})
export class ManageordersModule { }
