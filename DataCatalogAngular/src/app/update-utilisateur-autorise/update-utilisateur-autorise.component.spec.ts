import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUtilisateurAutoriseComponent } from './update-utilisateur-autorise.component';

describe('UpdateUtilisateurAutoriseComponent', () => {
  let component: UpdateUtilisateurAutoriseComponent;
  let fixture: ComponentFixture<UpdateUtilisateurAutoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUtilisateurAutoriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUtilisateurAutoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
