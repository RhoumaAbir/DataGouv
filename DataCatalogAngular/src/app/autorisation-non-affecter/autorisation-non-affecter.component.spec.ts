import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationNonAffecterComponent } from './autorisation-non-affecter.component';

describe('AutorisationNonAffecterComponent', () => {
  let component: AutorisationNonAffecterComponent;
  let fixture: ComponentFixture<AutorisationNonAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorisationNonAffecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorisationNonAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
