import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductreviewsComponent } from './productreviews.component';
import { ProductrewiewsListComponent } from './productrewiews-list/productrewiews-list.component';

const routes: Routes = [{ 
  path: '',
  children: [
    {
      path:'',
     component : ProductrewiewsListComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductreviewsRoutingModule { }
