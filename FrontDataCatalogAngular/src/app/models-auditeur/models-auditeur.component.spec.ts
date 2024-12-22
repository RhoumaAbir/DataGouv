import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAuditeurComponent } from './models-auditeur.component';

describe('ModelsAuditeurComponent', () => {
  let component: ModelsAuditeurComponent;
  let fixture: ComponentFixture<ModelsAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
