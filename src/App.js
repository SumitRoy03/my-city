import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import CityDetails from "./components/CityDetails";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [cityState, setCityState] = useState({});
  // eslint-disable-next-line
  const [cities, setCities] = useState([]);
  const cityRef = collection(db, "citiesData");

  useEffect(() => {
    const getCities = async () => {
      const data = await getDocs(cityRef);
      setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCities();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Navbar />
      <SearchBar setCityState={setCityState} />

      {/* conditional rendering */}
      {cityState.city!==undefined && <CityDetails cityState={cityState} />}
    </div>
  );
}

export default App;
