import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdecideurComponent } from './modifierdecideur.component';

describe('ModifierdecideurComponent', () => {
  let component: ModifierdecideurComponent;
  let fixture: ComponentFixture<ModifierdecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierdecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierdecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
