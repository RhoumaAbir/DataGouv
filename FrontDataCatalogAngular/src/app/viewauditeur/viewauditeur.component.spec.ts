import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewauditeurComponent } from './viewauditeur.component';

describe('ViewauditeurComponent', () => {
  let component: ViewauditeurComponent;
  let fixture: ComponentFixture<ViewauditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewauditeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewauditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
