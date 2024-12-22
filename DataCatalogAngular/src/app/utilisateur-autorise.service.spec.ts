import { TestBed } from '@angular/core/testing';

import { UtilisateurAutoriseService } from './utilisateur-autorise.service';

describe('UtilisateurAutoriseService', () => {
  let service: UtilisateurAutoriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurAutoriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
