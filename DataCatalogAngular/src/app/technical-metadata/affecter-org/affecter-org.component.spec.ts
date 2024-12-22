import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterOrgComponent } from './affecter-org.component';

describe('AffecterOrgComponent', () => {
  let component: AffecterOrgComponent;
  let fixture: ComponentFixture<AffecterOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
