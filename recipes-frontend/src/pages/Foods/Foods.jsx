import { React, useState } from "react";
import "./Foods.scss";
import Heading from "../../components/Heading/Heading";
import Searchbox from "../../components/Searchbox/Searchbox";

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
    </div>
  );
};

export default Foods;
