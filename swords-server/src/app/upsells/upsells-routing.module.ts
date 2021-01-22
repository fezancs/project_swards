import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsellsComponent } from './upsells.component';

const routes: Routes = [{ path: '', component: UpsellsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpsellsRoutingModule { }
