import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogproductRoutingModule } from './catalogproduct-routing.module';
import { CatalogproductComponent } from './catalogproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [CatalogproductComponent, ProductListComponent, CreateProductComponent],
  imports: [
    CommonModule,
    CatalogproductRoutingModule,
    ReactiveFormsModule
  ]
})
export class CatalogproductModule { }
