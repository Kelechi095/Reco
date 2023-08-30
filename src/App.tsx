import React from "react";
import useFetchData from "./hooks/useFetchData";

function App() {



  const {fetchData, countries, isLoading} = useFetchData(url)

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return <h4>Weather app</h4>;
}

export default App;
