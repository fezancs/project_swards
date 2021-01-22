import { Component, OnInit } from '@angular/core';
import { UpsellsService } from './services/upsells.service';
import { Upsells } from './models/upsells';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upsells',
  templateUrl: './upsells.component.html',
  styleUrls: ['./upsells.component.css']
})
export class UpsellsComponent implements OnInit {

  title: string;
  rows: Upsells[] = [];
  model:Upsells;
  
  constructor(
    private uppsellsService: UpsellsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getupsells();
  }

  getupsells() {
    this.uppsellsService.getupsells().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addupsell() {
    var a=$('#sku :selected').text();
    var b=$('#related_sku :selected').text();
    const bar = { sku: a, upsells_sku: b } as Upsells;
    this.uppsellsService.addupsell(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/upsells');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deleteuppsell(sku: string , upsells_sku:string) {
    console.log(sku,upsells_sku);
    if(confirm('Are you sure want to delete?')) {
      this.uppsellsService.deleteupsell(sku,upsells_sku).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.sku != sku || item.upsells_sku != upsells_sku)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
