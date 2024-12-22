import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpModelDettailComponent } from './pop-up-model-dettail.component';

describe('PopUpModelDettailComponent', () => {
  let component: PopUpModelDettailComponent;
  let fixture: ComponentFixture<PopUpModelDettailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpModelDettailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpModelDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
