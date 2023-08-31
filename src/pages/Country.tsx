import { useEffect} from "react";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountry } from "../redux/countrySlice";
import { CountryType } from "../types/types";
import { getCountries } from "../redux/countrySlice";


const Country = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { filteredCountries, country } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  const {id} = useParams();

  const selectedCountry = filteredCountries.find(
    (country: CountryType) => country.alpha3Code === id
  );

  useEffect(() => {
    dispatch(setCountry(selectedCountry))
  }, [dispatch, selectedCountry])

  console.log(selectedCountry);

  return <div>
    <h1>{country?.name}</h1>
  </div>;
};

export default Country;
