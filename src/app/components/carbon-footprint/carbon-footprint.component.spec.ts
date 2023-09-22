import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintComponent } from './carbon-footprint.component';

describe('CarbonFootprintComponent', () => {
  let component: CarbonFootprintComponent;
  let fixture: ComponentFixture<CarbonFootprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonFootprintComponent]
    });
    fixture = TestBed.createComponent(CarbonFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
