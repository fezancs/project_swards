import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import { Router } from '@angular/router';
import {CategoryService} from './services/category.service';
import { Category } from './models/category';
import { Subcategory } from './models/subcategory';
import { from } from 'rxjs';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {

  showloadingspinner=true;
  category: Category[] = [];
  subcategory: Subcategory[] = [];

  p: number = 1;
  limit: number = 6;
  total: number;
  title: string;
  slideData: Product[] = [];
  myImage="/images/";
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService,
  ) { }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.limit=deviceValue;
    this.getProducts(this.p);
}


  
  ngOnInit(): void {

    this.getProducts(this.p);
    this.getcategorys();
    this.getsubcategorys();

    this.title = 'Products';
  

  $('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#listgrid-container ul').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('#listgrid-container ul').removeClass('grid').addClass('list');
    }
   });
  }

  getProducts(p: number) {
    let offset = (p - 1) * this.limit;
    this.productService.getProducts(offset, this.limit).subscribe(
      result => {
        this.slideData = result.data;
        console.log(result.data);
        console.log(this.slideData);
        this.total = result.total;
        this.showloadingspinner=false;
      }
    )
  }

  getPage(pageNo: number) {
    this.p = pageNo;
    this.getProducts(this.p);
  }

  getcategorys() {
    this.categoryService.getcategorys().subscribe(
      result => {
        this.category= result;
        console.log(this.category);
      }
    )
  }

  getsubcategorys() {
    this.categoryService.getsubcategorys().subscribe(
      result => {
        this.subcategory = result;
        console.log(this.subcategory);
      }
    )
  }

  // slideData1 = [
  //   {
  //     image: "assets/images/product1.png",
  //     name: "CLASSIC SWORD",
  //     price: "$99.00",
  //   },
  //   {
  //     image: "assets/images/product1.png",
  //     name: "CASUAL GOLD SWORD",
  //     price: "$99.00",
  //   },
  //   {
  //     image: "assets/images/product1.png",
  //     name: "HOBBIT BLACK KNIGHT",
  //     price: "$99.00",
  //   },
  //   {
  //     image: "assets/images/product1.png",
  //     name: "CLASSIC SWORD",
  //     price: "$99.00",
  //   },
  //   {
  //     image: "assets/images/product1.png",
  //     name: "HOBBIT BLACK KNIGHT",
  //     price: "$99.00",
  //   },
  //   {
  //     image: "assets/images/product1.png",
  //     name: "HAYYAR POTER SWORD",
  //     price: "$99.00",
  //   },
  // ]

  // category1 = [
  //   {
  //     id:"1",
  //     name: "abc",
  //   },
  //   {
  //     id:"3",
  //     name: "def",
  //   },
  //   {
  //     id:"2",
  //     name: "ghi",
  //   } 
  // ]

  // subcategory1 = [
  //   {
  //     id:"1",
  //     parentid:"1",
  //     name: "aaa",
  //   },
  //   {
  //     id:"1",
  //     parentid:"1",
  //     name: "aaaaaaaaaa",
  //   },
  //   {
  //     id:"3",
  //     parentid:"2",
  //     name: "eee",
  //   },
  //   {
  //     id:"2",
  //     parentid:"3",
  //     name: "sss",
  //   } 
  // ]

  print(category:string , subcategory:string)
  {
    console.log(category);
    console.log(subcategory);
    
    let offset = (this.p - 1) * this.limit;
    
    this.productService.getroductbycategory(category, subcategory,offset, this.limit).subscribe(
      result => {
        this.slideData = result.data;
        console.log(result);
        this.total = result.total;
      }
    )


  }


}
