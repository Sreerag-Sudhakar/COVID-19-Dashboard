import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashLayoutComponent } from './components/dash-layout/dash-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountryComponent } from './components/country/country.component';
import { EditCountryComponent } from './components/edit-country/edit-country.component';

import { AuthGuard } from '../../core/guards/auth/auth.guard'
const routes: Routes = [
  {
    path : '',
    component : DashLayoutComponent,
    children : [
      { path : '', component : DashboardComponent, canActivate: [AuthGuard]},
      { path : 'country', component : CountryComponent},
      { path : 'country/edit/:country', component : EditCountryComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
