import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionReussiteComponent } from './inscription-reussite.component';

describe('InscriptionReussiteComponent', () => {
  let component: InscriptionReussiteComponent;
  let fixture: ComponentFixture<InscriptionReussiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionReussiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionReussiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
