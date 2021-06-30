import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { SharedModule } from 'shared/shared.module';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AccessDeniedComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
  ],
  exports: [NavbarComponent],
  imports: [
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      // Anonoymous Users
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'access-denied',
        component: AccessDeniedComponent,
      },
    ]),
  ],
})
export class CoreModule {}
