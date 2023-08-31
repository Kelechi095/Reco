import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
    (country: CountryType) => country.name === id
  );

  useEffect(() => {
    dispatch(setCountry(selectedCountry));
  }, [dispatch, selectedCountry]);

  const borders = country?.borders.map((border) =>
    getCountryName(countries, border)
  );

  return (
    <div>
      <h1>{country?.name}</h1>
      <div className="borders">
        {borders?.map((border, index) => (
          <Link to={`/${border}`} key={index}>
            <p>{border}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;
