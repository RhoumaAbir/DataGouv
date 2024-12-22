import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundAnalysteComponent } from './not-found-analyste.component';

describe('NotFoundAnalysteComponent', () => {
  let component: NotFoundAnalysteComponent;
  let fixture: ComponentFixture<NotFoundAnalysteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundAnalysteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundAnalysteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
