import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDetailsComponent } from './trace-details.component';

describe('TraceDetailsComponent', () => {
  let component: TraceDetailsComponent;
  let fixture: ComponentFixture<TraceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
