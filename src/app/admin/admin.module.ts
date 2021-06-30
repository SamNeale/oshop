import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGaurd } from 'shared/services/auth-gaurd.service';
import { SharedModule } from 'shared/shared.module';

import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminGaurd } from './services/admin.guard';

@NgModule({
  declarations: [
    ProductFormComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/manage-products/new',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminGaurd],
      },
      {
        path: 'admin/manage-products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGaurd, AdminGaurd],
      },
      {
        path: 'admin/manage-orders',
        component: ManageOrdersComponent,
        canActivate: [AuthGaurd, AdminGaurd],
      },
      {
        path: 'admin/manage-products',
        component: ManageProductsComponent,
        canActivate: [AuthGaurd, AdminGaurd],
      },
    ]),
  ],
  providers: [AdminGaurd],
})
export class AdminModule {}
