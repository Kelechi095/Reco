import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountry, getCountries } from "../redux/countrySlice";
import { CountryType } from "../types/types";
import { getCountryName } from "../utils/getCountryName";

const Country = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { filteredCountries, country, countries } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { id } = useParams();

  const selectedCountry = filteredCountries.find(
    (country: CountryType) => country.alpha3Code === id
  );

  useEffect(() => {
    dispatch(setCountry(selectedCountry));
  }, [dispatch, selectedCountry]);

  const content = country?.borders.map((border, index) => (
    <h4 key={index}>{getCountryName(countries, border)}</h4>
  ));

  return (
    <div>
      <h1>{country?.name}</h1>
      <div className="borders">{content}</div>
    </div>
  );
};

export default Country;
