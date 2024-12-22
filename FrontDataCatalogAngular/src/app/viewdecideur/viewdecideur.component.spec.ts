import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdecideurComponent } from './viewdecideur.component';

describe('ViewdecideurComponent', () => {
  let component: ViewdecideurComponent;
  let fixture: ComponentFixture<ViewdecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
