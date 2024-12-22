import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnalysteComponent } from './header-analyste.component';

describe('HeaderAnalysteComponent', () => {
  let component: HeaderAnalysteComponent;
  let fixture: ComponentFixture<HeaderAnalysteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAnalysteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAnalysteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
