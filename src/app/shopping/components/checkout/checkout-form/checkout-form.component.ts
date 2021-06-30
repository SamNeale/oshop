import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/orders';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit, OnDestroy {
  @Input('shopping-cart') cart: ShoppingCart;

  shipping = { city: '', address1: '', address2: '', name: '' };
  userSub: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  
  ngOnInit() {
    this.userSub = this.authService.$user.subscribe(
      (user) => (this.userId = user?.uid as string)
    );
  }

  async placeOrder(form: any) {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success', result.key]);
  }
}
