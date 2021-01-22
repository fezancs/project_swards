import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderdetalsComponent } from './vieworderdetals.component';

describe('VieworderdetalsComponent', () => {
  let component: VieworderdetalsComponent;
  let fixture: ComponentFixture<VieworderdetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderdetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderdetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
