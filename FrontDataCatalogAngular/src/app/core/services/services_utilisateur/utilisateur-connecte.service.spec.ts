import { TestBed } from '@angular/core/testing';

import { UtilisateurConnecteService } from './utilisateur-connecte.service';

describe('UtilisateurConnecteService', () => {
  let service: UtilisateurConnecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurConnecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
