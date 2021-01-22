import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hotsalesdata=[
    {
     swordimage : "assets/images/hotsales4.png",
    },
    {
     swordimage : "assets/images/hotsales5.png",
    }
   ]

}
