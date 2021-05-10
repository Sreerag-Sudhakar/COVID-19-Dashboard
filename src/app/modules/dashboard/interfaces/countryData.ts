export interface CountryData {
    country: string,
    countryInfo: CountryInfo,
    cases: number,
    deaths: number,
    recovered: number,
    tests:number,
    population:number
}

export interface CountryInfo {
    _id: null,
    iso2: string,
    iso3: string,
    lat: number,
    long: number,
    flag: string
}