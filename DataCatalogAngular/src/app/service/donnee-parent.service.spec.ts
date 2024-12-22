import { TestBed } from '@angular/core/testing';

import { DonneeParentService } from './donnee-parent.service';

describe('DonneeParentService', () => {
  let service: DonneeParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneeParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
