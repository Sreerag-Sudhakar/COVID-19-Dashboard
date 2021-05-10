import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { CountryComponent } from './components/country/country.component';
import { DashLayoutComponent } from './components/dash-layout/dash-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { EditCountryComponent } from './components/edit-country/edit-country.component';

import { DashboardService } from './services/dashboard.service';
import { CountryService } from './services/country.service';
import { MillionPipe } from './pipes/million.pipe';


@NgModule({
  declarations: [
    SummaryComponent,
    CountryComponent,
    DashLayoutComponent,
    DashboardComponent,
    CaseCardComponent,
    CountryCardComponent,
    MillionPipe,
    EditCountryComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService,
    CountryService
  ]
})
export class DashboardModule { }
