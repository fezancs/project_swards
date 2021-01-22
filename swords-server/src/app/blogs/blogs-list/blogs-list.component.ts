import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Blogs } from '../models/blogs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  title: string;
  rows: Blogs[] = [];

  constructor(
    private blogsService: BlogsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getblogs();
  }

  getblogs() {
    this.blogsService.getBlogs().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }

  deleteblog(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.blogsService.deleteBlog(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
