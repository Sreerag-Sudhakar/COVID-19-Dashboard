import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs'
import { CountryData } from '../interfaces/countryData'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryData:CountryData[] = []
  constructor(private http: HttpClient) { }

  getCountryWiseStatistics() {
    return this.http.get(environment.countryWiseStatisticsUrl);
  }

  editCountry(country:CountryData) {
    let index = this.countryData.findIndex((c)=>c.country == country.country)

    if(index != -1){
      this.countryData[index].cases =  country.cases;
      this.countryData[index].deaths = country.deaths;
      this.countryData[index].tests =  country.tests;
      this.countryData[index].recovered = country.recovered;

      return true
    }
    else{
      return false
    }
  }
}
