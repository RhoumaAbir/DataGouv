import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdministrateursComponent } from './liste-administrateurs.component';

describe('ListeAdministrateursComponent', () => {
  let component: ListeAdministrateursComponent;
  let fixture: ComponentFixture<ListeAdministrateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdministrateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAdministrateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
