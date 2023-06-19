import { React, useEffect, useState } from "react";
import "./Foods.scss";
import Heading from "../../components/Heading/Heading";
import Searchbox from "../../components/Searchbox/Searchbox";
import FoodCardList from "../../components/FoodCardList/FoodCardList";
import Footer from "../../components/Footer/Footer";
import Select from "../../components/Select/Select";
import Spinner from "../../components/Spinner/Spinner";

const Foods = ({ vegans }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedVegans, setSelectedVegans] = useState(false);

  const getRecipes = async (vegan) => {
    let url = "http://localhost:8080/recipes";

    if (vegan) {
      url += `/vegans`;
    }

    const response = await fetch(url);
    const recipeData = await response.json();
    setRecipes(recipeData);
  };

  useEffect(() => {
    getRecipes(selectedVegans);
  }, [selectedVegans]);

  const handleSelectVegan = () => {
    setSelectedVegans(!selectedVegans);
  };

  const handleSearchInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };

  const searchRecipe = recipes.filter((recipe) => {
    return recipe.foodName.toLowerCase().includes(searchTerm);
  });

  // const isLoading = !(recipes.length > 0) && !(vegans.length > 0);
  // if (isLoading) {
  //   return <Spinner />;
  // }

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
      <div className="food-page__vegan-checkbox">
        <input
          className="food-page__vegan-checkbox--box"
          type="checkbox"
          value={selectedVegans}
          onChange={handleSelectVegan}
        />
        <label className="food-page__vegan-checkbox--label">
          Fancy for a vegan option?{" "}
        </label>
      </div>
      <div>
        <FoodCardList recipes={searchRecipe} veganRecipes={selectedVegans} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Foods;
