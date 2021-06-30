import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGaurd implements CanActivate {

  constructor(private userService: UserService, 
              private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    return this.authService.$user
      .pipe(
        map( (user: firebase.default.User | null) => {

          if (!user) {
            return false;
          }  

          if (this.userService.isAdmin(user)) {
            return true;
          }
          else {
            this.router.navigate(['access-denied']);
            return false;
          }
        })
      );
  }
  
}
