import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriqueComponent } from './edit-historique.component';

describe('EditHistoriqueComponent', () => {
  let component: EditHistoriqueComponent;
  let fixture: ComponentFixture<EditHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
