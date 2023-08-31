import { useEffect } from "react";
import { RootState } from "../redux/store";
import {useSelector, useDispatch} from 'react-redux'
import { getCountries, setCountryState } from "../redux/countrySlice";
import { AppDispatch } from "../redux/store";
import { Ring} from '@uiball/loaders'


const Home = () => {
    const dispatch = useDispatch<AppDispatch>()

  const {countries, loading} = useSelector((state: RootState) => state.countries)

  const arr = ["All", "Africa", "America", "Asia", "Europe", "Oceania"]


  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const handleSetCountry = (payload: string) => {
    dispatch(setCountryState(payload))
  }

  console.log(countries)

  if(loading){
    return <Ring size={45} color="#231f20"/>
  }

  return (
    <>
    <h1>This is the home page</h1>
    <button onClick={() => handleSetCountry('Asia')}>Click</button>
    </>
  )
}

export default Home