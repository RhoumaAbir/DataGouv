import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaffecteClassificationComponent } from './desaffecte-classification.component';

describe('DesaffecteClassificationComponent', () => {
  let component: DesaffecteClassificationComponent;
  let fixture: ComponentFixture<DesaffecteClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesaffecteClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaffecteClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
