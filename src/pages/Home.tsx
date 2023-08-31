import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, setFilteredCountriesState } from "../redux/countrySlice";
import { DotWave } from "@uiball/loaders";
import { filterOptions } from "../utils/filterOptions";
import { searchCountries } from "../utils/filterFunction";
import { Link } from "react-router-dom";
import { CountryType } from "../types/types";

import ReactPaginate from "react-paginate";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [keyword, setKeyWord] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

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

  /* PAGINATION SECTION STARTS HERE */
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(countries.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  /* PAGINATION SECTION ENDS HERE */

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
        {countries
          .slice(offset, offset + PER_PAGE)
          .map((country: CountryType) => (
            <div className="country" key={country.alpha3Code}>
              <Link to={`/${country.name}`}>
                <p>{country.name}</p>
              </Link>
            </div>
          ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </section>
  );
};

export default Home;
