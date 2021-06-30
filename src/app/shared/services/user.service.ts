import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  adminUsers = ['Sam Neale', 'John Cena'];

  constructor(private afDb: AngularFireDatabase) { }

  save(user: firebase.default.User) {
    firebase.default.database().ref('products/users/' + user.uid)
      .update({
        name: user.displayName, 
        email: user.email,
        admin: this.isAdmin(user)
      });
  }

  isAdmin(user: firebase.default.User): boolean {

    for (let i = 0; i < this.adminUsers.length; i++){
      if (this.adminUsers[i] === user.displayName){
        return true;
      }
    }

    return false;
  }
}
