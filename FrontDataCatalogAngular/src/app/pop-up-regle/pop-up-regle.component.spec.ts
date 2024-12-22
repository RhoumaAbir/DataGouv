import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRegleComponent } from './pop-up-regle.component';

describe('PopUpRegleComponent', () => {
  let component: PopUpRegleComponent;
  let fixture: ComponentFixture<PopUpRegleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRegleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
