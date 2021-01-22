import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory } from '../models/subcategory';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent implements OnInit {

  title: string;
  rows: Subcategory[] = [];

  constructor(private subcategoryService: SubcategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getsubcategorys();
  }

  
  getsubcategorys() {
    this.subcategoryService.getsubcategorys().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }

  deletecustomer(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.subcategoryService.deletesubcategory(id).subscribe(
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
