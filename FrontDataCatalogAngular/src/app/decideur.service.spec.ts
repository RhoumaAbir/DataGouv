import { TestBed } from '@angular/core/testing';

import { DecideurService } from './decideur.service';

describe('DecideurService', () => {
  let service: DecideurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecideurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
