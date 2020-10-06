import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../core/authentication/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
  }

}
