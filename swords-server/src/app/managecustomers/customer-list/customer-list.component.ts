import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../models/customers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  title: string;
  rows: Customers[] = [];

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getcustomers();
  }

  getcustomers() {
    this.customerService.getcustomers().subscribe(
      result => {
        this.rows = result;
        console.log(this.rows);
      }
    )
  }

  deletecustomer(email: string) {
    if(confirm('Are you sure want to delete?')) {
      this.customerService.deletecustomer(email).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.email != email)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }

}
