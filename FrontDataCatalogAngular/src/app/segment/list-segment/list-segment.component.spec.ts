import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSegmentComponent } from './list-segment.component';

describe('ListSegmentComponent', () => {
  let component: ListSegmentComponent;
  let fixture: ComponentFixture<ListSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
