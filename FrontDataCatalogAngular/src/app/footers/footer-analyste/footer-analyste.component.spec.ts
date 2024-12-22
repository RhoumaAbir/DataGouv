import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAnalysteComponent } from './footer-analyste.component';

describe('FooterAnalysteComponent', () => {
  let component: FooterAnalysteComponent;
  let fixture: ComponentFixture<FooterAnalysteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAnalysteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAnalysteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
