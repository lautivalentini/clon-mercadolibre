import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  registerUser(userdata) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch((error) => {
        console.log(error);
      });
  }

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  loginUser(userdata) {
    firebase
      .auth()
      .signInWithEmailAndPassword(userdata.email, userdata.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut();
  }
}
