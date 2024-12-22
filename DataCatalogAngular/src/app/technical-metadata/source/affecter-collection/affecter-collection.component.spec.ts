import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterCollectionComponent } from './affecter-collection.component';

describe('AffecterCollectionComponent', () => {
  let component: AffecterCollectionComponent;
  let fixture: ComponentFixture<AffecterCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
