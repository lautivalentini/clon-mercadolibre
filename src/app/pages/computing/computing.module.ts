import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputingRoutingModule } from './computing-routing.module';
import { ComputingComponent } from './computing/computing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

//service
import { ComputerService } from 'src/app/core/services/computer.service';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [ComputingComponent],
  imports: [
    CommonModule,
    ComputingRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ComputerService]
})
export class ComputingModule { }
