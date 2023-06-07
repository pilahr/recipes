import React from "react";
import "./FoodRecipe.scss";

const FoodRecipe = ({ recipe }) => {
  const {
    foodName,
    ingredients,
    method,
    imageUrl,
    level,
    // level: { name },
  } = recipe;
  console.log(recipe);
  console.log(foodName);

  return (
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
        {/* <p className="food-recipe__content--level">Difficulty: {level.name}</p> */}
        <h4 className="food-recipe__content--head">Ingredients</h4>
        <p className="food-recipe__content--text">{ingredients}</p>
        <h4 className="food-recipe__content--head">Method</h4>
        <p className="food-recipe__content--text">{method}</p>
      </div>
    </div>
  );
};

export default FoodRecipe;
