import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAffectationComponent } from './pop-up-affectation.component';

describe('PopUpAffectationComponent', () => {
  let component: PopUpAffectationComponent;
  let fixture: ComponentFixture<PopUpAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAffectationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
