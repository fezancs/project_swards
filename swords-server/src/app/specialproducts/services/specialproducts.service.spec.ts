import { TestBed } from '@angular/core/testing';

import { SpecialproductsService } from './specialproducts.service';

describe('SpecialproductsService', () => {
  let service: SpecialproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
