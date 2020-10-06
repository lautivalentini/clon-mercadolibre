import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAppliancesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAppliancesRoutingModule {}
