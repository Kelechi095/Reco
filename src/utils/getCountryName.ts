import { CountryType } from "../types/types";

export const getCountryName = (countries: CountryType[], arg: string) => {
    const newCountry = countries.find((country: CountryType) => country.alpha3Code === arg);
    return newCountry?.name;
  };
