import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDecideurComponent } from './footer-decideur.component';

describe('FooterDecideurComponent', () => {
  let component: FooterDecideurComponent;
  let fixture: ComponentFixture<FooterDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
