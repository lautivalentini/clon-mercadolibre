import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputingComponent } from './computing/computing.component';

const routes: Routes = [
  {
    path: '',
    component: ComputingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputingRoutingModule { }
