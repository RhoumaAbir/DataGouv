import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataControlComponent } from './metadata-control.component';

describe('MetadataControlComponent', () => {
  let component: MetadataControlComponent;
  let fixture: ComponentFixture<MetadataControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetadataControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
