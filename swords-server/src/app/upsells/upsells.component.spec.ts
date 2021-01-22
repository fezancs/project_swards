import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellsComponent } from './upsells.component';

describe('UpsellsComponent', () => {
  let component: UpsellsComponent;
  let fixture: ComponentFixture<UpsellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
