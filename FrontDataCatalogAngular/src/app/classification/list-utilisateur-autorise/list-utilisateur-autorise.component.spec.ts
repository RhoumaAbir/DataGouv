import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilisateurAutoriseComponent } from './list-utilisateur-autorise.component';

describe('ListUtilisateurAutoriseComponent', () => {
  let component: ListUtilisateurAutoriseComponent;
  let fixture: ComponentFixture<ListUtilisateurAutoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUtilisateurAutoriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUtilisateurAutoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
