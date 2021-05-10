import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryData } from '../../interfaces/countryData';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries:CountryData[] = []
  // country:CountryData | undefined;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryWiseStatistics();
  }

  getCountryWiseStatistics(): void {
    this.countryService.getCountryWiseStatistics().subscribe((data: any) => {
      this.countries = <CountryData[]>data;
      console.log(this.countries)
    });  
    
  }
}
