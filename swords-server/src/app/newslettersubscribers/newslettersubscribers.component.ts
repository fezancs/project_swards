import { Component, OnInit } from '@angular/core';
import { NewslettersubscribersService } from './services/newslettersubscribers.service';
import { Newslettersubscribers } from './models/newslettersubscribers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newslettersubscribers',
  templateUrl: './newslettersubscribers.component.html',
  styleUrls: ['./newslettersubscribers.component.css']
})
export class NewslettersubscribersComponent implements OnInit {

  title: string;
  rows: Newslettersubscribers[] = [];

  constructor(
    private newsletterService: NewslettersubscribersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getnewslettersubscribers();
  }

  getnewslettersubscribers() {
    this.newsletterService.getnewslettersubscribers().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deletenewslettersubscribers(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.newsletterService.deletenewslettersubscribers(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }

}
