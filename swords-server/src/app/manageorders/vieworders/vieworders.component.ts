import { Component, OnInit } from '@angular/core';
import { ManageordersService } from '../services/manageorders.service';
import { Vieworders } from '../models/vieworders';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  title: string;
  rows: Vieworders[] = [];

  constructor(
    private manageordersService: ManageordersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getorders();
  }

  getorders() {
    this.manageordersService.getorders().subscribe(
      result => {
        this.rows = result;
       // console.log(result);
      }
    )
  }
}
