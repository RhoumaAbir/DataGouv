import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuditeurComponent } from './home-auditeur.component';

describe('HomeAuditeurComponent', () => {
  let component: HomeAuditeurComponent;
  let fixture: ComponentFixture<HomeAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
