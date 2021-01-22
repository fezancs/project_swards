import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubcategoryComponent } from './managesubcategory.component';

describe('ManagesubcategoryComponent', () => {
  let component: ManagesubcategoryComponent;
  let fixture: ComponentFixture<ManagesubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
