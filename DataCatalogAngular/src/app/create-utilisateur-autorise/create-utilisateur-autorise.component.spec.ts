import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilisateurAutoriseComponent } from './create-utilisateur-autorise.component';

describe('CreateUtilisateurAutoriseComponent', () => {
  let component: CreateUtilisateurAutoriseComponent;
  let fixture: ComponentFixture<CreateUtilisateurAutoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUtilisateurAutoriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUtilisateurAutoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
