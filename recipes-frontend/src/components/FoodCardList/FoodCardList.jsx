import React from "react";
import "./FoodCardList.scss";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

const FoodCardList = ({ recipes }) => {
  return (
    <div className="foodcard-list">
      {recipes.map((recipe, index) => (
        <FoodCard key={index} recipe={recipe} />

        //   <Link key={recipe.id} to={`/recipe/edit/${recipe.id}`}>
        //     <FoodCard recipe={recipe} />
        //   </Link>
      ))}
    </div>
  );
};

export default FoodCardList;
