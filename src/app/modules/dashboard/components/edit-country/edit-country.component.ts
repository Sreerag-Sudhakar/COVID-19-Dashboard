import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CountryData } from '../../interfaces/countryData'; 
import { FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service'
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
  selectedCountry:string = '' ;
  
  editForm = this.fb.group({
    cases: [null, [Validators.required, Validators.pattern('[0-9]+')]],
    deaths:  [null, [Validators.required, Validators.pattern('[0-9]+')]],
    recovered: [null, [Validators.required, Validators.pattern('[0-9]+')]],
    tests:  [null, [Validators.required, Validators.pattern('[0-9]+')]]
  });

  submitted:boolean = false;

  get cases(){
    return this.editForm.get('cases')
  }
  get deaths(){
    return this.editForm.get('deaths')
  }
  get recovered(){
    return this.editForm.get('recovered')
  }
  get tests(){
    return this.editForm.get('tests')
  }
  constructor(private activatedRoute:ActivatedRoute, private router:Router,
    private fb:FormBuilder, private countryService:CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.selectedCountry = <string>param.get('country')
      this.loadCountry(this.selectedCountry)
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.editForm.valid) {
      let formData = this.editForm.value;
      formData.country = this.selectedCountry;
      let result = this.countryService.editCountry(formData)
      if(result)
      this.router.navigate(['/dashboard/country'])
    }
    else{
      // alert('Please fill the fields with proper values')
  
    }

  }

  loadCountry(countryName:string) {
    let country = <CountryData>this.countryService.countryData.find((country:CountryData)=> country.country == countryName);
    this.setForm(country)
  }

  setForm(country:CountryData) {
    this.editForm.setValue({
      cases :country.cases,
      deaths :country.deaths,
      recovered :country.recovered,
      tests :country.tests
    })
    this.editForm.updateValueAndValidity();
  }


  onCancel() {
    this.router.navigate(['/dashboard/country'])
  }

}
