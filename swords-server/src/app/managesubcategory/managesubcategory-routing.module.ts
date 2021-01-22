import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesubcategoryComponent } from './createsubcategory/createsubcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path:'',
       component : SubcategorylistComponent
      },
      {
        path:'create',
       component : CreatesubcategoryComponent
      },
      {
        path: 'edit/:id',
        component: CreatesubcategoryComponent
      }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagesubcategoryRoutingModule { }
