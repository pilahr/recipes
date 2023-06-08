import { React, useEffect, useState } from "react";
import "./Foods.scss";
import Heading from "../../components/Heading/Heading";
import Searchbox from "../../components/Searchbox/Searchbox";
import FoodCardList from "../../components/FoodCardList/FoodCardList";
import Footer from "../../components/Footer/Footer";

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
  const searchRecipe = recipes.filter((recipe) => {
    return recipe.foodName.toLowerCase().includes(searchTerm);
  });

  return (
    <div className="food-page">
      <div>
        <Heading />
      </div>
      <div className="food-page__searchbox">
        <Searchbox
          searchTerm={searchTerm}
          handleSearchInput={handleSearchInput}
          label="recipes"
        />
      </div>
      <div>
        <FoodCardList recipes={searchRecipe} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Foods;
