import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}

  cart: ShoppingCart;
  cartItems: ShoppingCartItem[];
  cart$: Observable<ShoppingCart>;

  async ngOnInit() {
    // await this.cartService
    //   .getCart()
    //   .then((cart) =>
    //     cart.subscribe((cart) => {
    //       (this.cart = cart as unknown as ShoppingCart);
    //       this.cartItems = this.cart.items;
    //       //let ids = this.cart.productIds as ;
    //       console.log(this.cartItems);
    //     }
    //   ));

    this.cart$ = await this.cartService.getCart();
    //this.cart$.pipe(map(x => {})).subscribe(snapshot => console.log(snapshot));
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
