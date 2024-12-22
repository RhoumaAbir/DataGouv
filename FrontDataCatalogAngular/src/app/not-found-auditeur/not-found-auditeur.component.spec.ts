import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundAuditeurComponent } from './not-found-auditeur.component';

describe('NotFoundAuditeurComponent', () => {
  let component: NotFoundAuditeurComponent;
  let fixture: ComponentFixture<NotFoundAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
