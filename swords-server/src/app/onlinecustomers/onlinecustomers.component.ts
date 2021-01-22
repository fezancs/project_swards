import { Component, OnInit } from '@angular/core';
import { OnlinecustomersService } from './services/onlinecustomers.service';
import { Onlinecustomers } from './models/onlinecustomers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlinecustomers',
  templateUrl: './onlinecustomers.component.html',
  styleUrls: ['./onlinecustomers.component.css']
})
export class OnlinecustomersComponent implements OnInit {

  title: string;
  rows: Onlinecustomers[] = [];

  constructor(
    private onlinecustomersService: OnlinecustomersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getonlinecustomers();
  }

  getonlinecustomers() {
    this.onlinecustomersService.getonlinecustomers().subscribe(
      result => {
        this.rows = result;
      }
    )
  }
}
