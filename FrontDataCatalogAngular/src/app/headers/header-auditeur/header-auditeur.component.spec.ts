import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuditeurComponent } from './header-auditeur.component';

describe('HeaderAuditeurComponent', () => {
  let component: HeaderAuditeurComponent;
  let fixture: ComponentFixture<HeaderAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
