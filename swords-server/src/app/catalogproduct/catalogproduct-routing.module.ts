import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogproductComponent } from './catalogproduct.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path:'',
       component : ProductListComponent
      },
      {
        path:'create',
       component : CreateProductComponent
      },
      {
        path: 'edit/:sku',
        component: CreateProductComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogproductRoutingModule { }
