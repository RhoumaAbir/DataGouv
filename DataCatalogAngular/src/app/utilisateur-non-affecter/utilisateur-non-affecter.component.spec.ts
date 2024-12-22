import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurNonAffecterComponent } from './utilisateur-non-affecter.component';

describe('UtilisateurNonAffecterComponent', () => {
  let component: UtilisateurNonAffecterComponent;
  let fixture: ComponentFixture<UtilisateurNonAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurNonAffecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurNonAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
