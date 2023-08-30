import React, { useState } from 'react'
import axios from 'axios'

//const url = "../data.json"


const useFetchData = (url) => {
    const [countries, setCountries] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(url)
        setIsLoading(true)
        setCountries(response.data)
      } catch (error) {
        console.log(error);
      }

      
    };
    
    React.useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    


  return [{countries, isLoading}, fetchData]
}

export default useFetchData

  
