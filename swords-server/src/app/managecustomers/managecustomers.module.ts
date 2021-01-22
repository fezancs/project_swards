import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecustomersRoutingModule } from './managecustomers-routing.module';
import { ManagecustomersComponent } from './managecustomers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [ManagecustomersComponent, CustomerListComponent],
  imports: [
    CommonModule,
    ManagecustomersRoutingModule
  ]
})
export class ManagecustomersModule { }
