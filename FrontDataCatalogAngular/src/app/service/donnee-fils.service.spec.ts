import { TestBed } from '@angular/core/testing';

import { DonneeFilsService } from './donnee-fils.service';

describe('DonneeFilsService', () => {
  let service: DonneeFilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneeFilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
