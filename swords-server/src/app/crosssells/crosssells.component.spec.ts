import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosssellsComponent } from './crosssells.component';

describe('CrosssellsComponent', () => {
  let component: CrosssellsComponent;
  let fixture: ComponentFixture<CrosssellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrosssellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosssellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
