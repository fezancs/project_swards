import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagesubcategoryRoutingModule } from './managesubcategory-routing.module';
import { ManagesubcategoryComponent } from './managesubcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { CreatesubcategoryComponent } from './createsubcategory/createsubcategory.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagesubcategoryComponent, SubcategorylistComponent, CreatesubcategoryComponent],
  imports: [
    CommonModule,
    ManagesubcategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagesubcategoryModule { }
