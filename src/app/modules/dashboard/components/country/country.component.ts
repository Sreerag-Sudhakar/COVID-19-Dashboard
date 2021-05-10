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
  sortKey:string = '';
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
    if(this.countryService.countryData.length == 0)
    this.countryService.getCountryWiseStatistics().subscribe((data: any) => {
      // this.countries = <CountryData[]>data;
      // console.log(this.countries)
      this.countriesData = [...data]
      this.getResultsByFilters();
      this.countryService.countryData = this.countriesData;
    });
    else {
      this.countriesData = [...this.countryService.countryData]
      this.getResultsByFilters();
      this.countryService.countryData = this.countriesData;
    }
    
    
  }

  sort(sortKey:string, array:CountryData[]): CountryData[]{
    let sortResults:CountryData[] = [];
    if(sortKey == '')
    return array;  
    if(sortKey == 'country')
    sortResults = array.sort((a:any, b:any)=>{
      return a[sortKey].localeCompare(b[sortKey]);
    })
    else
    sortResults = array.sort((a:any, b:any)=>{
      return a[sortKey] - b[sortKey];
    })
    return sortResults;
  }
  search(searchKey:string): CountryData[]{
    let searchResults:CountryData[] = [];
    searchResults = this.countriesData.filter((country:CountryData)=>{
      return country.country.toLowerCase().includes(searchKey.toLowerCase())
    })
    return searchResults;
  }

  getResultsByFilters() {
    let results:CountryData[] = [... this.countriesData];
    //Apply search
    if(this.searchKey.trim()) {
      results = this.search(this.searchKey);
    }
    //Updating the total count
    this.pager.totalItems = results.length;
    //Apply sort
    if(this.sortKey){
      results = this.sort(this.sortKey, results)
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
