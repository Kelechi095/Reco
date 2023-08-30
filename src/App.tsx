import { useEffect } from "react";
import { RootState } from "./redux/store";
import {useSelector, useDispatch} from 'react-redux'
import { getCountries } from "./redux/countrySlice";
import { AppDispatch } from "./redux/store";

function App() {

  const dispatch = useDispatch<AppDispatch>()

  const {countries, loading} = useSelector((state: RootState) => state.countries)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  console.log(countries)

  if(loading){
    return <h1>Loading</h1>
  }


  return <h4>Rest countries project</h4>;
}

export default App;
