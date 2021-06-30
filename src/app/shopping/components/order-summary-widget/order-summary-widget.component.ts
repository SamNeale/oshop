import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'order-summary-widget',
  templateUrl: './order-summary-widget.component.html',
  styleUrls: ['./order-summary-widget.component.css']
})
export class OrderSummaryWidgetComponent {

  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor() { }

}
