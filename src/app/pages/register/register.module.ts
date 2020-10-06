import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthenticationService } from '../../core/authentication/authentication.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthenticationService],
})
export class RegisterModule {}
