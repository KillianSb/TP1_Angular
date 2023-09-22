import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintResultComponent } from './carbon-footprint-result.component';

describe('CarbonFootprintResultComponent', () => {
  let component: CarbonFootprintResultComponent;
  let fixture: ComponentFixture<CarbonFootprintResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonFootprintResultComponent]
    });
    fixture = TestBed.createComponent(CarbonFootprintResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
