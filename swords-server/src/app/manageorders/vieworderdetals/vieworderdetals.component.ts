import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageordersService } from '../services/manageorders.service';
import { Vieworders } from '../models/vieworders';
import { orders } from '../models/order';
import { customerorderdetails, invoice, order, shippinginfo } from '../models/customerorderdetails';

@Component({
  selector: 'app-vieworderdetals',
  templateUrl: './vieworderdetals.component.html',
  styleUrls: ['./vieworderdetals.component.css']
})
export class VieworderdetalsComponent implements OnInit {
  
  res :any[]=[];
  coustomer_email:string;
  order_id:number;
  customerorderdetails:customerorderdetails[]=[]; 
  invoice:invoice[]=[];
  shippinginfo:shippinginfo[]=[];
  order:order[]=[];
  constructor( private manageordersService: ManageordersService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.order_id= +this.route.snapshot.paramMap.get('coustomer_email');
    console.log(this.order_id);
    this.getorderdetails();
    this.getcustomerorderdetails();
    this.getinvoice(); 
    this.getshippinginfo();

    $(document).ready(function(){
	
      $('#maps li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('#maps li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })
    
    })


  }

  getorderdetails() {
    console.log(this.order_id);
    this.manageordersService.getorderdetails(this.order_id).subscribe(
      result => {
        console.log(result.data);
        this.order=result.data;
      }
    )
  }
  
  getcustomerorderdetails() {
    this.manageordersService.getcustomerorderdetails(this.order_id).subscribe(
      result => {
        this.getcustomerorderdetails=result.data;
        console.log(this.getcustomerorderdetails);
      }
    )
  }

  getinvoice() {
    this.manageordersService.getinvoice(this.order_id).subscribe(
      result => {
        console.log(result);
        this.invoice=result.data;
        console.log(this.invoice);
      }
    )
  }
  getshippinginfo() {
    this.manageordersService.getshippinginfo(this.order_id).subscribe(
      result => {
        console.log(result);
        this.shippinginfo=result.data;  
      }
    )
  }
  
} 
