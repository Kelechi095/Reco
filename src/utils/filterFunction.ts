export const searchCountries = (filteredCountries: [], keyword: string) => {
    return filteredCountries
      .filter((country: any) => {
        if (keyword.length === 0) {
          return country;
        } else if (country.name.toLowerCase().includes(keyword.toLowerCase())) {
          return country;
        }
      })
  };