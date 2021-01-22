import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialproductsComponent } from './specialproducts.component';

const routes: Routes = [{ path: '', component: SpecialproductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialproductsRoutingModule { }
