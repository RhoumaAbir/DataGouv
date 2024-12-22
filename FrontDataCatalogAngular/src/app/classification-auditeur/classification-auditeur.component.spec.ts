import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationAuditeurComponent } from './classification-auditeur.component';

describe('ClassificationAuditeurComponent', () => {
  let component: ClassificationAuditeurComponent;
  let fixture: ComponentFixture<ClassificationAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
