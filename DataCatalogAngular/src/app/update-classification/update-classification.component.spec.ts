import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassificationComponent } from './update-classification.component';

describe('UpdateClassificationComponent', () => {
  let component: UpdateClassificationComponent;
  let fixture: ComponentFixture<UpdateClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
