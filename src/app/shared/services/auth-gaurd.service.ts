import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot) {
    return this.authService.$user.pipe( 
      map(user => {
        if (user) return true

        this.router
        .navigate(
          ['login'], 
          { 
            queryParams: 
            { 
              returnUrl: state.url 
            }
          });
          
        return false;
    }))
  }
}
