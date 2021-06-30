import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryWidgetComponent } from './order-summary-widget.component';

describe('OrderSummaryWidgetComponent', () => {
  let component: OrderSummaryWidgetComponent;
  let fixture: ComponentFixture<OrderSummaryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
