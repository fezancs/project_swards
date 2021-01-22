import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

import { BlogsComponent } from './blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [{  
path: '',
children: [
  {
    path:'',
   component : BlogsListComponent
  },
  {
    path:'create',
   component : CreateBlogComponent
  },
  {
    path: 'edit/:id',
    component: CreateBlogComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
