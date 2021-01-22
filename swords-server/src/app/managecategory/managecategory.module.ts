import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagecategoryRoutingModule } from './managecategory-routing.module';
import { ManagecategoryComponent } from './managecategory.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagecategoryComponent, CategorylistComponent, CreatecategoryComponent],
  imports: [
    CommonModule,
    ManagecategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagecategoryModule { }
