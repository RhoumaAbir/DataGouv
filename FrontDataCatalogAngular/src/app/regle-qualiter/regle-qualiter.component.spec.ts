import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegleQualiterComponent } from './regle-qualiter.component';

describe('RegleQualiterComponent', () => {
  let component: RegleQualiterComponent;
  let fixture: ComponentFixture<RegleQualiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegleQualiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegleQualiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
