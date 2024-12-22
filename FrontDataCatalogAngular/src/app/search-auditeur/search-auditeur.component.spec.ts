import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAuditeurComponent } from './search-auditeur.component';

describe('SearchAuditeurComponent', () => {
  let component: SearchAuditeurComponent;
  let fixture: ComponentFixture<SearchAuditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAuditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
