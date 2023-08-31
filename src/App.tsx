import Country from "./pages/Country";
import Home from "./pages/Home";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Country />} />
    </Routes>
    
  );
}

export default App;
