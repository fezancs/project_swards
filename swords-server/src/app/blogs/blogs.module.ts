import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogsComponent, BlogsListComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogsModule { }
