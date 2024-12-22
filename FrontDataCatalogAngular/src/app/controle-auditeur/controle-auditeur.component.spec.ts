import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAuditeurComponent } from './controle-auditeur.component';

describe('ControleAuditeurComponent', () => {
  let component: ControleAuditeurComponent;
  let fixture: ComponentFixture<ControleAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
