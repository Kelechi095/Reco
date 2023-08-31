import { CountryType } from "../types/types";

export const searchCountries = (filteredCountries: CountryType[], keyword: string) => {
    return filteredCountries
      .filter((country: CountryType) => {
        if (keyword.length === 0) {
          return country;
        } else if (country.name.toLowerCase().includes(keyword.toLowerCase())) {
          return country;
        }
      })
  };