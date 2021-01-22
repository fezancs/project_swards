import { Component, OnInit } from '@angular/core';
import { CrosssellsService } from './services/crosssells.service';
import { Crosssells } from './models/crosssells';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crosssells',
  templateUrl: './crosssells.component.html',
  styleUrls: ['./crosssells.component.css']
})
export class CrosssellsComponent implements OnInit {

  title: string;
  rows: Crosssells[] = [];
  model:Crosssells;
  
  constructor(
    private crosssellsService: CrosssellsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getcrosssells();
  }

  getcrosssells() {
    this.crosssellsService.getcrosssells().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addcrosssell() {
    var a=$('#sku :selected').text();
    var b=$('#related_sku :selected').text();
    const bar = { sku: a, crosssells_sku: b } as Crosssells;
    this.crosssellsService.addcrosssell(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/crosssells');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deletecrosssell(sku: string , crosssells_sku:string) {
    if(confirm('Are you sure want to delete?')) {
      this.crosssellsService.deleteupsell(sku,crosssells_sku).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.sku != sku || item.crosssells_sku != crosssells_sku)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
