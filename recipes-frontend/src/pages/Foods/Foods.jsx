import { React, useState } from "react";
import "./Foods.scss";
import Heading from "../../components/Heading/Heading";
import Searchbox from "../../components/Searchbox/Searchbox";
import FoodCard from "../../components/FoodCard/FoodCard";

const Foods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <Searchbox searchTerms={searchTerm}
        handleSearchInput = {handleSearchInput}/>
      </div>
      <div>
        <FoodCard />
      </div>
    </div>
  );
};

export default Foods;
