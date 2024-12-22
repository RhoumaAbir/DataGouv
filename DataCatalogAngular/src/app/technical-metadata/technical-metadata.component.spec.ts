import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalMetadataComponent } from './technical-metadata.component';

describe('TechnicalMetadataComponent', () => {
  let component: TechnicalMetadataComponent;
  let fixture: ComponentFixture<TechnicalMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalMetadataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
