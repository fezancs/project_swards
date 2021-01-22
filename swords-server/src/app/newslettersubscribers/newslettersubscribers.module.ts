import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewslettersubscribersRoutingModule } from './newslettersubscribers-routing.module';
import { NewslettersubscribersComponent } from './newslettersubscribers.component';


@NgModule({
  declarations: [NewslettersubscribersComponent],
  imports: [
    CommonModule,
    NewslettersubscribersRoutingModule
  ]
})
export class NewslettersubscribersModule { }
