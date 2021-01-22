import { Component, OnInit } from '@angular/core';
import { RelatedproductsService } from './services/relatedproducts.service';
import { Relatedproducts } from './models/relatedproducts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatedproducts',
  templateUrl: './relatedproducts.component.html',
  styleUrls: ['./relatedproducts.component.css']
})
export class RelatedproductsComponent implements OnInit {

  title: string;
  rows: Relatedproducts[] = [];
  model:Relatedproducts;
  
  constructor(
    private productService: RelatedproductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  addProduct() {
    var a=$('#sku :selected').text();
    var b=$('#related_sku :selected').text();
    const bar = { sku: a, related_sku: b } as Relatedproducts;
    this.productService.addProduct(bar).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/relatedproducts');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  deleteProduct(sku: string , related_sku:string) {
    if(confirm('Are you sure want to delete?')) {
      this.productService.deleteProduct(sku,related_sku).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.sku != sku || item.related_sku != related_sku)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
