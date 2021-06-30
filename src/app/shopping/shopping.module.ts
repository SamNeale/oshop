import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGaurd } from 'shared/services/auth-gaurd.service';
import { SharedModule } from 'shared/shared.module';

import { CheckoutFormComponent } from './components/checkout/checkout-form/checkout-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderSummaryWidgetComponent } from './components/order-summary-widget/order-summary-widget.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutFormComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ProductFilterComponent,
    OrderSummaryWidgetComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGaurd],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGaurd],
      },
      {
        path: 'order-success/:id',
        component: OrderSuccessComponent,
        canActivate: [AuthGaurd],
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ]),
  ],
})
export class ShoppingModule {}
