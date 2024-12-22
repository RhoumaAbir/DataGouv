import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutorisationComponent } from './list-autorisation.component';

describe('ListAutorisationComponent', () => {
  let component: ListAutorisationComponent;
  let fixture: ComponentFixture<ListAutorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutorisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
