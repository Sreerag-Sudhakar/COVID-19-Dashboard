import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module'
import { SummaryComponent } from './components/summary/summary.component';
import { CountryComponent } from './components/country/country.component';
import { DashLayoutComponent } from './components/dash-layout/dash-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CaseCardComponent } from './components/case-card/case-card.component';


@NgModule({
  declarations: [
    SummaryComponent,
    CountryComponent,
    DashLayoutComponent,
    DashboardComponent,
    CaseCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
