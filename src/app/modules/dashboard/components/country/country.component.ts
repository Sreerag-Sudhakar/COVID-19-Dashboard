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
  pager = {
    currentPage: 1,
    itemsPerPage: 30,
    totalItems:0
  }
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryWiseStatistics();
  }

  getCountryWiseStatistics(): void {
    this.countryService.getCountryWiseStatistics().subscribe((data: any) => {
      // this.countries = <CountryData[]>data;
      console.log(this.countries)
      this.countriesData = [...data]
      this.getResultsByFilters();
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

  getResultsByFilters() {
    let results:CountryData[] = [... this.countriesData];
    if(this.searchKey.trim()) {
      results = this.countriesData.filter((country:CountryData)=>{
        return country.country.toLowerCase().includes(this.searchKey.toLowerCase())
      })
    }
    this.pager.totalItems = results.length;
    if(this.sortKey){
      if(this.sortKey == 'country')
      results = results.sort((a:any, b:any)=>{
        return a[this.sortKey].localeCompare(b[this.sortKey]);
      })
      else
      results = results.sort((a:any, b:any)=>{
        return a[this.sortKey] - b[this.sortKey];
      })
    }

    let startIndex = (this.pager.currentPage - 1) * this.pager.itemsPerPage;
    let endIndex = startIndex + this.pager.itemsPerPage;
    this.countries = results.slice(startIndex, endIndex)
  }

  previous () {
    if(this.pager.currentPage != 1)
    this.pager.currentPage--;
    this.getResultsByFilters()
  }

  next () {
    let totalPages = Math.ceil(this.countriesData.length/this.pager.itemsPerPage);
    if(this.pager.currentPage < totalPages)
    this.pager.currentPage++;
    this.getResultsByFilters()
  }
}
