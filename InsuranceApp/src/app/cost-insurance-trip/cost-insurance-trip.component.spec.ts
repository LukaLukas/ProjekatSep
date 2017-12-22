/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CostInsuranceTripComponent } from './cost-insurance-trip.component';

describe('CostInsuranceTripComponent', () => {
  let component: CostInsuranceTripComponent;
  let fixture: ComponentFixture<CostInsuranceTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostInsuranceTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostInsuranceTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
