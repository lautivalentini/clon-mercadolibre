import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAppliancesRoutingModule } from './home-appliances-routing.module';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

//service
import { ProductsService } from '../../core/services/products.service';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [HomeAppliancesComponent],
  imports: [
    CommonModule,
    HomeAppliancesRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductsService],
})
export class HomeAppliancesModule {}
