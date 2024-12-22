import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaleModelComponent } from './principale-model.component';

describe('PrincipaleModelComponent', () => {
  let component: PrincipaleModelComponent;
  let fixture: ComponentFixture<PrincipaleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaleModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipaleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
