import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundDecideurComponent } from './not-found-decideur.component';

describe('NotFoundDecideurComponent', () => {
  let component: NotFoundDecideurComponent;
  let fixture: ComponentFixture<NotFoundDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
