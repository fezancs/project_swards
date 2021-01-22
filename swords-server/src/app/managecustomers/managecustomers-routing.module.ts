import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { ManagecustomersComponent } from './managecustomers.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path:'',
       component : CustomerListComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagecustomersRoutingModule { }
