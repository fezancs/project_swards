import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogreviewsRoutingModule } from './blogreviews-routing.module';
import { BlogreviewsComponent } from './blogreviews.component';


@NgModule({
  declarations: [BlogreviewsComponent],
  imports: [
    CommonModule,
    BlogreviewsRoutingModule
  ]
})
export class BlogreviewsModule { }
