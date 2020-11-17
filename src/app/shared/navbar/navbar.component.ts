import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../core/authentication/authentication.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showItems: boolean = false;

  showLine: boolean = false;

  showMenu: boolean = false;

  showCross: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRouer: ActivatedRoute
  ) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {}
}
