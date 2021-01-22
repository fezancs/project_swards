import { Component, OnInit } from '@angular/core';
import { SpecialproductsService } from './services/specialproducts.service';
import { Specialproducts } from './models/specialproducts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specialproducts',
  templateUrl: './specialproducts.component.html',
  styleUrls: ['./specialproducts.component.css']
})
export class SpecialproductsComponent implements OnInit {

  title: string;
  rows: Specialproducts[] = [];
  model: Specialproducts;

  constructor(private specialproductsService: SpecialproductsService,
    private router: Router) { }

  ngOnInit() {
    this.title = 'Products';
    this.getspecialproducts();
  }

  getspecialproducts() {
    this.specialproductsService.getspecialproducts().subscribe(
      result => {
        console.log(result);
        this.rows = result;
      }
    )
  }

  addspecialproducts() {
    var a=$('#sku :selected').text();
    var b=$('#date').val();
    
    const bar = { sku: a , created_at: b } as Specialproducts;
    this.specialproductsService.addspecialproducts(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.getspecialproducts();
          //this.router.navigateByUrl('/specialproducts');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deletespecialproducts(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.specialproductsService.deletespecialproducts(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id )
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }

}
