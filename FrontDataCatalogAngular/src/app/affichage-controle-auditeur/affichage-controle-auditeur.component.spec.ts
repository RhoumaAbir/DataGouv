import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageControleAuditeurComponent } from './affichage-controle-auditeur.component';

describe('AffichageControleAuditeurComponent', () => {
  let component: AffichageControleAuditeurComponent;
  let fixture: ComponentFixture<AffichageControleAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageControleAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageControleAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
