import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.$user = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(
      new firebase.default.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.afAuth.signOut();
  }
}
