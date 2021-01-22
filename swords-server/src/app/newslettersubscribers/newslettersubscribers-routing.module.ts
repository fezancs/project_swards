import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewslettersubscribersComponent } from './newslettersubscribers.component';

const routes: Routes = [{ path: '', component: NewslettersubscribersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewslettersubscribersRoutingModule { }
