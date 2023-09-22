import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintFormComponent } from './carbon-footprint-form.component';

describe('CarbonFootprintFormComponent', () => {
  let component: CarbonFootprintFormComponent;
  let fixture: ComponentFixture<CarbonFootprintFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonFootprintFormComponent]
    });
    fixture = TestBed.createComponent(CarbonFootprintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
