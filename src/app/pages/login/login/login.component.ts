import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/authentication/authentication.service';

import { Routes, ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgModel,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  userdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
        ],
      ],
    });
  }

  onSubmit() {
    this.userdata = this.saveUserData();
    this.authService.loginUser(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaje = true;
      }
    }, 2000);
  }

  saveUserData() {
    const saveUserData = {
      email: this.loginGroup.get('email').value,
      password: this.loginGroup.get('password').value,
    };
    return saveUserData;
  }

  mensaje = false;

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
