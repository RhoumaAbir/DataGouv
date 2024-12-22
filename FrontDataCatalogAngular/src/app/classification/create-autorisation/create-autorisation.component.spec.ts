import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutorisationComponent } from './create-autorisation.component';

describe('CreateAutorisationComponent', () => {
  let component: CreateAutorisationComponent;
  let fixture: ComponentFixture<CreateAutorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAutorisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
