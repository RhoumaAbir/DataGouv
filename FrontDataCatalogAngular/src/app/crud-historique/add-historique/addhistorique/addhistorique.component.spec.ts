import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhistoriqueComponent } from './addhistorique.component';

describe('AddhistoriqueComponent', () => {
  let component: AddhistoriqueComponent;
  let fixture: ComponentFixture<AddhistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
