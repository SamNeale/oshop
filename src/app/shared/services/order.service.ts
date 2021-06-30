import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'shared/models/orders';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order: any) {
    // Would be better to wrap this in a database transaction so either both operations succeed or both fail
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    // Would be better to wrap this in a database transaction so either both operations succeed or both fail

    return result;
  }

  getAllOrdersForAdmin() {
    return this.db
      .object('orders')
      .snapshotChanges()
      .pipe(
        map((order) => ({
          ...(order.payload.val() as Order),
        }))
      );
  }

  getAllOrdersForUser(userId: string) {
    return this.db.list('orders', (ref) =>
      ref.orderByChild('userId').equalTo(userId)
    ).snapshotChanges().pipe(map(order => order as unknown as Order));
  }
}
