import { Component, OnInit } from '@angular/core';
import { ReviewsService} from './services/reviews.service';
import { Reviews } from './models/reviews';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogreviews',
  templateUrl: './blogreviews.component.html',
  styleUrls: ['./blogreviews.component.css']
})
export class BlogreviewsComponent implements OnInit {

  title: string;
  rows: Reviews[] = [];

  constructor(
    private reviewsService: ReviewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getreviews();
  }

  getreviews() {
    this.reviewsService.getreviews().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }

  deletereviews(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.reviewsService.deletereviews(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id )
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }


}
