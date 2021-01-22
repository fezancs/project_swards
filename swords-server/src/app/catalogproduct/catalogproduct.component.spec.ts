import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogproductComponent } from './catalogproduct.component';

describe('CatalogproductComponent', () => {
  let component: CatalogproductComponent;
  let fixture: ComponentFixture<CatalogproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
