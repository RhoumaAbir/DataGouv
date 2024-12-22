import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataUserComponent } from './add-data-user.component';

describe('AddDataUserComponent', () => {
  let component: AddDataUserComponent;
  let fixture: ComponentFixture<AddDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
