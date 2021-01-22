import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreviewsComponent } from './blogreviews.component';

describe('BlogreviewsComponent', () => {
  let component: BlogreviewsComponent;
  let fixture: ComponentFixture<BlogreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
