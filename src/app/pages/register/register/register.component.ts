import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  NgModel,
} from '@angular/forms';

import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('filterInput', { static: false }) filterInput: NgModel;
  searchTerm: string;

  userGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  userdata: any;

  errorForm = {
    email: '',
    password: '',
  };
  messageValidation = {
    email: {
      required: 'Email Obligatorio',
      email: 'Introduzca una direccion de email correcta',
    },
    password: {
      required: 'Contraseña obligatoria',
      pattern: 'La contraseña debe contener al menos una letra un numero ',
      minlength: 'y mas de 6 caracteres',
    },
  };
  onValueChanged(data?: any) {
    if (!this.userGroup) {
      return;
    }
    const form = this.userGroup;
    for (const field in this.errorForm) {
      this.errorForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.messageValidation[field];
        for (const key in control.errors) {
          this.errorForm[field] += messages[key] + '';
        }
      }
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //firebase
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyAwNN3O2YmpDjplPOc89NqEBUgJVEPMJR0',
    //   authDomain: 'market-app-2020.firebaseapp.com',
    // });

    //validacion formulario
    this.userGroup.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();

    this.userGroup = this.formBuilder.group({
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
    this.userGroup.valueChanges.subscribe((data) => this.onValueChanged(data));
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    this.authService.registerUser(this.userdata);
    this.router.navigate(['/home']);
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.userGroup.get('email').value,
      password: this.userGroup.get('password').value,
    };
    return saveUserdata;
  }
}
