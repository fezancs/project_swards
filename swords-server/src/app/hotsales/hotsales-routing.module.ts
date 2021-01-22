import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotsalesComponent } from './hotsales.component';

const routes: Routes = [{ path: '', component: HotsalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotsalesRoutingModule { }
