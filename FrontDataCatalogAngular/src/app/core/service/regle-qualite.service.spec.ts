import { TestBed } from '@angular/core/testing';

import { RegleQualiteService } from './regle-qualite.service';

describe('RegleQualiteService', () => {
  let service: RegleQualiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegleQualiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
