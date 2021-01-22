import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersubscribersComponent } from './newslettersubscribers.component';

describe('NewslettersubscribersComponent', () => {
  let component: NewslettersubscribersComponent;
  let fixture: ComponentFixture<NewslettersubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslettersubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslettersubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
