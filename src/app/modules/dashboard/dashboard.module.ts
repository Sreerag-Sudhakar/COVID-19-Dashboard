import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { CountryComponent } from './components/country/country.component';
import { DashLayoutComponent } from './components/dash-layout/dash-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CaseCardComponent } from './components/case-card/case-card.component';

import { DashboardService } from './services/dashboard.service'
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
    // HttpClientModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
