import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAuditComponent } from './inscription-audit.component';

describe('InscriptionAuditComponent', () => {
  let component: InscriptionAuditComponent;
  let fixture: ComponentFixture<InscriptionAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
