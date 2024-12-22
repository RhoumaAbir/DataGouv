import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdecideurComponent } from './ajoutdecideur.component';

describe('AjoutdecideurComponent', () => {
  let component: AjoutdecideurComponent;
  let fixture: ComponentFixture<AjoutdecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutdecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
