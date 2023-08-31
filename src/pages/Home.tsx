import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, setFilteredCountriesState } from "../redux/countrySlice";
import { AppDispatch } from "../redux/store";
import { Ring } from "@uiball/loaders";
import { filterOptions } from "../utils/utils";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { filteredCountries, loading } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSetCountry = (payload: string) => {
    dispatch(setFilteredCountriesState(payload));
  };

  console.log(filteredCountries);

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
        <div className="country-card"></div>
      </section>
    </>
  );
};

export default Home;
