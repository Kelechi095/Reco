import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, setFilteredCountriesState } from "../redux/countrySlice";
import { AppDispatch } from "../redux/store";
import { DotWave } from "@uiball/loaders";
import { filterOptions } from "../utils/filterOptions";
import { searchCountries } from "../utils/filterFunction";
import { Link } from "react-router-dom";
import { CountryType } from "../types/types";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [keyword, setKeyWord] = useState("");

  const { filteredCountries, loading } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSetCountry = (payload: string) => {
    dispatch(setFilteredCountriesState(payload));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  const countries = searchCountries(filteredCountries, keyword);

  if (loading) {
    return (
      <div className="loading">
        <DotWave size={45} color="#231f20" />;
      </div>
    );
  }

  return (
    <section>
      <div className="filterOptions">
        {filterOptions.map((option, index) => (
          <button key={index} onClick={() => handleSetCountry(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="search">
        <input type="text" value={keyword} onChange={handleChange} />
      </div>
      <div className="country-card">
        {countries.map((country: CountryType) => (
          <div className="country" key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <p>{country.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
