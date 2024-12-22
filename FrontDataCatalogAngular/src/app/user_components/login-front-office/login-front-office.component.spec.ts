import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFrontOfficeComponent } from './login-front-office.component';

describe('LoginFrontOfficeComponent', () => {
  let component: LoginFrontOfficeComponent;
  let fixture: ComponentFixture<LoginFrontOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFrontOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFrontOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
