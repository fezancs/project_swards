import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  title: string;
  rows: Category[] = [];

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Products';
    this.getcategorys();
  }

  
  getcategorys() {
    this.categoryService.getcategorys().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }

  deletecustomer(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.categoryService.deletecategory(id).subscribe(
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
