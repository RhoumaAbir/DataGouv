import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecideurComponent } from './home-decideur.component';

describe('HomeDecideurComponent', () => {
  let component: HomeDecideurComponent;
  let fixture: ComponentFixture<HomeDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
