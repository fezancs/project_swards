import { TestBed } from '@angular/core/testing';

import { CrosssellsService } from './crosssells.service';

describe('CrosssellsService', () => {
  let service: CrosssellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrosssellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
