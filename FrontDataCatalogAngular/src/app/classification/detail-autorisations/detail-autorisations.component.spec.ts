import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAutorisationsComponent } from './detail-autorisations.component';

describe('DetailAutorisationsComponent', () => {
  let component: DetailAutorisationsComponent;
  let fixture: ComponentFixture<DetailAutorisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAutorisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAutorisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
