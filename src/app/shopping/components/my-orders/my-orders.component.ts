import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent  {
  $order: Observable<any>;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  // ngOnInit(): void {
  //   this.$order = this.authService.$user.pipe(
  //     switchMap((user: firebase.default.User | null, index: number) => {
  //       if (!user) return;
  //       return this.orderService.getAllOrdersForUser(user.uid) as Observable<any>;
  //     })
  //   );
  // }
}
