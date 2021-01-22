import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string;
  rows: Product[] = [];

  constructor(
    private productService: ProductService,
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
        console.log(result);
      }
    )
  }

  deleteProduct(sku: string) {
    if(confirm('Are you sure want to delete?')) {
      this.productService.deleteProduct(sku).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.sku != sku)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }

}
