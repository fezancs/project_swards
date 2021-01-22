import { TestBed } from '@angular/core/testing';

import { HotsalesService } from './hotsales.service';

describe('HotsalesService', () => {
  let service: HotsalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotsalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
