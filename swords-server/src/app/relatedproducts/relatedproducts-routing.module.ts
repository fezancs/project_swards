import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatedproductsComponent } from './relatedproducts.component';

const routes: Routes = [{ path: '', component: RelatedproductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatedproductsRoutingModule { }
