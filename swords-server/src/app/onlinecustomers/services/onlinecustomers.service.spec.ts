import { TestBed } from '@angular/core/testing';

import { OnlinecustomersService } from './onlinecustomers.service';

describe('OnlinecustomersService', () => {
  let service: OnlinecustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlinecustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
