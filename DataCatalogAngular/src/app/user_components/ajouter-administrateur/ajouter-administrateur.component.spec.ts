import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAdministrateurComponent } from './ajouter-administrateur.component';

describe('AjouterAdministrateurComponent', () => {
  let component: AjouterAdministrateurComponent;
  let fixture: ComponentFixture<AjouterAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAdministrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
