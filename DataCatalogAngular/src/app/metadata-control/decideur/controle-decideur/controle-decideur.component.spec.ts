import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDecideurComponent } from './controle-decideur.component';

describe('ControleDecideurComponent', () => {
  let component: ControleDecideurComponent;
  let fixture: ComponentFixture<ControleDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
