import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrewiewsListComponent } from './productrewiews-list.component';

describe('ProductrewiewsListComponent', () => {
  let component: ProductrewiewsListComponent;
  let fixture: ComponentFixture<ProductrewiewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductrewiewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrewiewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
