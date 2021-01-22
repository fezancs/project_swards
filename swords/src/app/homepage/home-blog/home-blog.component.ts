import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { BlogsService } from '../services/blogs.service';
import { Blogs } from '../models/blogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  rows: Blogs[] = [];
  row:any;
  constructor(
    private blogsService: BlogsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getblogs();
  }


  slideData = [
    {
      image: "assets/images/blog1.png",
    }, {
      image: "assets/images/blog2.png",
    }, {
      image: "assets/images/blog3.png",
    }, {
      image: "assets/images/blog1.png",
    }, {
      image: "assets/images/blog2.png",
    }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    //autoHeight: true,
    slidesPerView:3,
  
    allowTouchMove: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
   
  };

  getblogs() {
    this.blogsService.getBlogs().subscribe(
      result => {
        this.rows = result;
        console.log(this.rows);
      }
    )
  }



}
