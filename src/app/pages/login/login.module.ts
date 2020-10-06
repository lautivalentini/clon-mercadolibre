import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthenticationService } from '../../core/authentication/authentication.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [AuthenticationService],
})
export class LoginModule {}
