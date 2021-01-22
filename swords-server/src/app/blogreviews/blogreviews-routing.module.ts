import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogreviewsComponent } from './blogreviews.component';

const routes: Routes = [{ path: '', component: BlogreviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogreviewsRoutingModule { }
