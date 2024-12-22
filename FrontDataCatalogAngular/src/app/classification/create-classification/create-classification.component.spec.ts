import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassificationComponent } from './create-classification.component';

describe('CreateClassificationComponent', () => {
  let component: CreateClassificationComponent;
  let fixture: ComponentFixture<CreateClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
