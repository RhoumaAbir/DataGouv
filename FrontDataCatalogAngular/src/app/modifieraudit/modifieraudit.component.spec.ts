import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierauditComponent } from './modifieraudit.component';

describe('ModifierauditComponent', () => {
  let component: ModifierauditComponent;
  let fixture: ComponentFixture<ModifierauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierauditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
