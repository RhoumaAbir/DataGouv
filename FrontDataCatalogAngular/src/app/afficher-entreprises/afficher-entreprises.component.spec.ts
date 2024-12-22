import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEntreprisesComponent } from './afficher-entreprises.component';

describe('AfficherEntreprisesComponent', () => {
  let component: AfficherEntreprisesComponent;
  let fixture: ComponentFixture<AfficherEntreprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherEntreprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
