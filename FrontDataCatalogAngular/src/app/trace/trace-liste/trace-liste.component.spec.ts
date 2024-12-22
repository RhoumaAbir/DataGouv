import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceListeComponent } from './trace-liste.component';

describe('TraceListeComponent', () => {
  let component: TraceListeComponent;
  let fixture: ComponentFixture<TraceListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
