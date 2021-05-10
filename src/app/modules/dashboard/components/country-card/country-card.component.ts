import { Component, OnInit, Input } from '@angular/core';
import { CountryData } from '../../interfaces/countryData';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input()
  country:CountryData = {
      country: '',
      countryInfo: {
        _id: null,
        iso2 : '',
        iso3: '',
        lat: 0,
        long: 0,
        flag : ''
      },
      cases: 0,
      deaths: 0,
      recovered: 0,
      tests: 0,
      population: 0
    };
  constructor() { }

  ngOnInit(): void {
  }

}
