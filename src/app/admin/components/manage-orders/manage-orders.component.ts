import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from 'shared/models/orders';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  $orders: Observable<Order>

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.$orders = this.orderService.getAllOrdersForAdmin();
  }

}
