import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router'

import { AuthenticationService } from '../authentication/authentication.service';

import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService
// implements CanActivate 
{

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private angularFire: AngularFireAuth) { }


  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //     this.authService.isLogged().subscribe(res => {
  //       if (!res) {
  //         this.router.navigate(['/home']);
  //         return false;
  //       }
  //     });
  //     return true
  //   }
}