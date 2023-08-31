import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, setFilteredCountriesState } from "../redux/countrySlice";
import { AppDispatch } from "../redux/store";
import { Ring } from "@uiball/loaders";
import { filterOptions } from "../utils/utils";

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

  console.log(filteredCountries);

  const searchCountries = (filteredCountries, keyword) => {
    return filteredCountries
      .filter((country: any) => {
        if (keyword.length === 0) {
          return country;
        } else if (country.name.toLowerCase().includes(keyword.toLowerCase())) {
          return country;
        }
      })
      .map((country: any) => {
        return (
          <div className="country">
            <p>{country.name}</p>
          </div>
        );
      });
  };

  const content = searchCountries(filteredCountries, keyword)

  console.log(content)

  if (loading) {
    return <Ring size={45} color="#231f20" />;
  }

  return (
    <>
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
        <div className="country-card">{content}</div>
      </section>
    </>
  );
};

export default Home;
