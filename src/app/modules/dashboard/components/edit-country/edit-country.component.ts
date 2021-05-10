import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CountryData } from '../../interfaces/countryData'; 
@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

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
  selectedCountry:string = '' 
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      console.log(param)
      this.selectedCountry = <string>param.get('country')
    })
  }

  onSubmit(){

  }

  onCancel() {
    this.router.navigate(['/dashboard/country'])
  }

}
