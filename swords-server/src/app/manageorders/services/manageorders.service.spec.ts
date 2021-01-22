import { TestBed } from '@angular/core/testing';

import { ManageordersService } from './manageorders.service';

describe('ManageordersService', () => {
  let service: ManageordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
