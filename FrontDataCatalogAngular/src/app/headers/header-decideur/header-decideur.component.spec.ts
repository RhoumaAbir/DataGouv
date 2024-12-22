import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDecideurComponent } from './header-decideur.component';

describe('HeaderDecideurComponent', () => {
  let component: HeaderDecideurComponent;
  let fixture: ComponentFixture<HeaderDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
