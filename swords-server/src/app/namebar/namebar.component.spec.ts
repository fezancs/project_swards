import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamebarComponent } from './namebar.component';

describe('NamebarComponent', () => {
  let component: NamebarComponent;
  let fixture: ComponentFixture<NamebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
