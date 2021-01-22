import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path:'',
       component : CategorylistComponent
      },
      {
        path:'create',
       component : CreatecategoryComponent
      },
      {
        path: 'edit/:id',
        component: CreatecategoryComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagecategoryRoutingModule { }
