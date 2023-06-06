import { React, useEffect, useState } from "react";
import "./Foods.scss";
import Heading from "../../components/Heading/Heading";
import Searchbox from "../../components/Searchbox/Searchbox";
import FoodCardList from "../../components/FoodCardList/FoodCardList";

const Foods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    let url = "http://localhost:8080/recipes";
    const response = await fetch(url);
    const recipeData = await response.json();
    setRecipes(recipeData);
  };

  useEffect(() => {
    getRecipes();
  }, []);

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
        <Searchbox
          searchTerms={searchTerm}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div>
        <FoodCardList recipes={recipes} />
      </div>
    </div>
  );
};

export default Foods;
