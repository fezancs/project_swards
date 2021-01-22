import { TestBed } from '@angular/core/testing';

import { RelatedproductsService } from './relatedproducts.service';

describe('RelatedproductsService', () => {
  let service: RelatedproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
