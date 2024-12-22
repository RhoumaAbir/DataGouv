import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificatioNonAffecterComponent } from './classificatio-non-affecter.component';

describe('ClassificatioNonAffecterComponent', () => {
  let component: ClassificatioNonAffecterComponent;
  let fixture: ComponentFixture<ClassificatioNonAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificatioNonAffecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificatioNonAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
