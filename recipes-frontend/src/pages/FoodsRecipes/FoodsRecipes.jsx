import { React, useEffect, useState } from "react";
import "./FoodsRecipes.scss";
import FoodRecipe from "../../components/FoodRecipe/FoodRecipe";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";

const FoodsRecipes = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const getRecipeById = async (id) => {
    const url = `http://localhost:8080/recipe/${id}`;
    const response = await fetch(url);
    const recipeData = await response.json();
    setRecipe(recipeData);
  };

  useEffect(() => {
    getRecipeById(id);
  }, [id]);

  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
          <FoodRecipe recipe={recipe} />
      </div>
    </div>
  );
};

export default FoodsRecipes;
