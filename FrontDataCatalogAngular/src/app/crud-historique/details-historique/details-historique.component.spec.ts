import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHistoriqueComponent } from './details-historique.component';

describe('DetailsHistoriqueComponent', () => {
  let component: DetailsHistoriqueComponent;
  let fixture: ComponentFixture<DetailsHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
