import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeParentComponent } from './donnee-parent.component';

describe('DonneeParentComponent', () => {
  let component: DonneeParentComponent;
  let fixture: ComponentFixture<DonneeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonneeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
