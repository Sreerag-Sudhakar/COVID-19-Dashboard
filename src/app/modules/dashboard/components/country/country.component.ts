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
  sortKey:string = 'country';
  searchKey:string = '';
  countriesData:CountryData[] = []
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryWiseStatistics();
  }

  getCountryWiseStatistics(): void {
    this.countryService.getCountryWiseStatistics().subscribe((data: any) => {
      this.countries = <CountryData[]>data;
      console.log(this.countries)
      this.countriesData = [...this.countries]
    });  
    
  }

  sort(sortKey:string){
    if(sortKey == 'country')
    this.countries = this.countries.sort((a:any, b:any)=>{
      return a[sortKey].localeCompare(b[sortKey]);
    })
    else
    this.countries = this.countries.sort((a:any, b:any)=>{
      return a[sortKey] - b[sortKey];
    })
    console.log(this.countries)
  }
  search(searchKey:string){
    console.log('search : ', searchKey, this.countriesData.length)
    if(searchKey.trim() == '')
    this.countries = [... this.countriesData]
    else
    this.countries = this.countriesData.filter((country:CountryData)=>{
      return country.country.toLowerCase().includes(searchKey.toLowerCase())
    })
    console.log(this.countries)
  }
}
