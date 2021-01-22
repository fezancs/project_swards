import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageordersComponent } from './manageorders.component';
import { VieworderdetalsComponent } from './vieworderdetals/vieworderdetals.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

const routes: Routes = [{ 
  path: '',
  children: [
    {
      path:'',
     component : ViewordersComponent
    },
    {
      path:'vieworderdetails/:coustomer_email',
     component : VieworderdetalsComponent
    },
    
  ]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageordersRoutingModule { }
