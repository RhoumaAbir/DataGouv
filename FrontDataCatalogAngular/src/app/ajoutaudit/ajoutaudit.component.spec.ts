import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutauditComponent } from './ajoutaudit.component';

describe('AjoutauditComponent', () => {
  let component: AjoutauditComponent;
  let fixture: ComponentFixture<AjoutauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutauditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
