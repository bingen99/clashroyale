import { TestBed } from '@angular/core/testing';

import { ClashRoyaleService } from './clash-royale.service';

describe('ClashRoyaleService', () => {
  let service: ClashRoyaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClashRoyaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
