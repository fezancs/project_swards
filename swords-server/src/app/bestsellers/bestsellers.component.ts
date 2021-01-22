import { Component, OnInit } from '@angular/core';
import { BestsellersService } from './services/bestsellers.service';
import { Bestsellers } from './models/bestsellers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  title: string;
  rows: Bestsellers[] = [];
  model:Bestsellers;

  constructor(private bestsellersService: BestsellersService,
    private router: Router) { }

  ngOnInit() {
    this.title = 'Products';
    this.getbestsellers();
  }

  getbestsellers() {
    this.bestsellersService.getbestsellers().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addbestseller() {
    var a=$('#sku :selected').text();
    var b=$('#date').val();
    
    const bar = { sku: a , created_at: b } as Bestsellers;
    this.bestsellersService.addbestseller(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/bestsellers');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deleteuppsell(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.bestsellersService.deletebestseller(id).subscribe(
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
