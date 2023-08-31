export type CountryType = {
    name: string;
    topLevelDomain: [],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: [],
    capital: string,
    altSpelling: [],
    subregion: string,
    region: string,
    population: string,
    latlng: [],
    demonym: string,
    area: string,
    timezones: [],
    borders: [],
    nativeName: string,
    numbericCode: string
    flags: object,
    currencies: [],
    languages: object
    translations: object
    flag: string
    regionalBlocs: []
    cioc: string
    independent: boolean
}


export type StateType = {
    countries: CountryType[],
    filteredCountries: CountryType[],
    country: null | CountryType,
    loading: boolean
    error: string | undefined | null
}

