import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAuditeurComponent } from './footer-auditeur.component';

describe('FooterAuditeurComponent', () => {
  let component: FooterAuditeurComponent;
  let fixture: ComponentFixture<FooterAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
