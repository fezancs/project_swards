import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecustomersComponent } from './onlinecustomers.component';

describe('OnlinecustomersComponent', () => {
  let component: OnlinecustomersComponent;
  let fixture: ComponentFixture<OnlinecustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinecustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
