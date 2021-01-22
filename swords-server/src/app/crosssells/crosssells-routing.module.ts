import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrosssellsComponent } from './crosssells.component';

const routes: Routes = [{ path: '', component: CrosssellsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrosssellsRoutingModule { }
