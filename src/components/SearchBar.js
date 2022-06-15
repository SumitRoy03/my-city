import React from "react";
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import FetchData from "../FetchData";

const SearchBar = ({ setCityState }) => {
  const [cityName, setcityName] = useState("Ranchi");

  const handleClick = (e) => {
    const obj = FetchData(cityName);
    setCityState(...obj);
  };

  return (
    <div className="Search_Bar">
      <Input
        placeholder="Enter your City"
        size="lg"
        onKeyDown={(e)=>{
          if(e.key==='Enter') handleClick(cityName)
        }}
        onChange={(e) => setcityName(e.target.value)}
      />
      <button
        className="_btn"
        type="submit"
        onClick={()=>handleClick()}
      >
        <span className="material-symbols-outlined">travel_explore</span>
      </button>
    </div>
  );
};

export default SearchBar;
