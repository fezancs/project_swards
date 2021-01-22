import { TestBed } from '@angular/core/testing';

import { UpsellsService } from './upsells.service';

describe('UpsellsService', () => {
  let service: UpsellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpsellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
