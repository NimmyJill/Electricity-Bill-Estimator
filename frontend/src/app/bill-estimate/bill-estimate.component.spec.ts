import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEstimateComponent } from './bill-estimate.component';

describe('BillEstimateComponent', () => {
  let component: BillEstimateComponent;
  let fixture: ComponentFixture<BillEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
