import React from "react";
import "./FoodRecipe.scss";
import { Link } from "react-router-dom";

const FoodRecipe = ({ recipe }) => {
  const {
    foodName,
    ingredients,
    method,
    imageUrl,
    nationality,
    level: { name },
    vegan,
  } = recipe;

  return (
    <>
      <div className="food-recipe">
        <div className="food-recipe__image">
          <img
            className="food-recipe__image--food"
            src={imageUrl}
            alt="food image"
          />
        </div>

        <div className="food-recipe__content">
          <h3 className="food-recipe__content--heading">{foodName}</h3>
          <p className="food-recipe__content--level">Difficulty: {name}</p>
          <p className="food-recipe__content--vegan">{vegan.name}</p>
          <h4 className="food-recipe__content--head">Nationality</h4>
          <p className="food-recipe__content--text">{nationality}</p>
          <h4 className="food-recipe__content--head">Ingredients</h4>
          <p className="food-recipe__content--text">{ingredients}</p>
          <h4 className="food-recipe__content--head">Method</h4>
          <p className="food-recipe__content--text">{method}</p>
        </div>
      </div>
      <Link to={`/recipes`}>
        <div className="link-back">
          <h3>&lt; &lt; Back to all recipes</h3>
        </div>
      </Link>
    </>
  );
};

export default FoodRecipe;
