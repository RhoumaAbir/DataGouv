import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeFilsComponent } from './donnee-fils.component';

describe('DonneeFilsComponent', () => {
  let component: DonneeFilsComponent;
  let fixture: ComponentFixture<DonneeFilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneeFilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonneeFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
