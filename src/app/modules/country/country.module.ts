import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountrySummaryComponent } from './components/country-summary/country-summary.component';
import { EditCountryComponent } from './components/edit-country/edit-country.component';


@NgModule({
  declarations: [
    CountrySummaryComponent,
    EditCountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
