import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotCleComponent } from './add-mot-cle.component';

describe('AddMotCleComponent', () => {
  let component: AddMotCleComponent;
  let fixture: ComponentFixture<AddMotCleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMotCleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMotCleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
