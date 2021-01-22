import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlinecustomersComponent } from './onlinecustomers.component';

const routes: Routes = [{ path: '', component: OnlinecustomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinecustomersRoutingModule { }
