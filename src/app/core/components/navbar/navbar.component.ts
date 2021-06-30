import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  totalItemCount: any;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    private shoppingCartService: ShoppingCartService
  ) {}

  logout() {
    this.authService.logout();
  }

  async ngOnInit() {
    this.shoppingCartService
      .getCart()
      .then((cart) =>
        cart.subscribe(
          (cart) =>
            (this.totalItemCount = (
              cart as unknown as ShoppingCart
            ).totalItemsCount())
        )
      );
  }
}
