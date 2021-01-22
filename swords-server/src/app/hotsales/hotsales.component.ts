import { Component, OnInit } from '@angular/core';
import { HotsalesService} from './services/hotsales.service';
import { Hotsales } from './models/hotsales';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotsales',
  templateUrl: './hotsales.component.html',
  styleUrls: ['./hotsales.component.css']
})
export class HotsalesComponent implements OnInit {

  title: string;
  rows: Hotsales[] = [];
  model:Hotsales;

  constructor(private hotsalesService: HotsalesService,
    private router: Router) { }

  ngOnInit() {
    this.title = 'Products';
    this.gethotsales();
  }

  gethotsales() {
    this.hotsalesService.gethotsales().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addpopular() {
    var a=$('#sku :selected').text();
    var b=$('#date').val();
    
    const bar = { sku: a , created_at: b } as Hotsales;
    this.hotsalesService.addhotsales(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/hotsales');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deletehotsales(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.hotsalesService.deletehotsales(id).subscribe(
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
