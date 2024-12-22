import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMetadataComponent } from './business-metadata.component';

describe('BusinessMetadataComponent', () => {
  let component: BusinessMetadataComponent;
  let fixture: ComponentFixture<BusinessMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessMetadataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
