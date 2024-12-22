import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDecideurComponent } from './search-decideur.component';

describe('SearchDecideurComponent', () => {
  let component: SearchDecideurComponent;
  let fixture: ComponentFixture<SearchDecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDecideurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
