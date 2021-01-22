import { Component, OnInit } from '@angular/core';
import { PopularService } from './services/popular.service';
import { Popular } from './models/popular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  title: string;
  rows: Popular[] = [];
  model:Popular;

  constructor(private popularService: PopularService,
    private router: Router) { }

  ngOnInit() {
    this.title = 'Products';
    this.getpopular();
  }

  getpopular() {
    this.popularService.getpopular().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addpopular() {
    var a=$('#sku :selected').text();
    var b=$('#date').val();
    
    const bar = { sku: a , created_at: b } as Popular;
    this.popularService.addpopular(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/popular');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deletepopular(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.popularService.deletepopular(id).subscribe(
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
