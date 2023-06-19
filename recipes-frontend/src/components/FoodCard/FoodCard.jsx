import React from "react";
import "./FoodCard.scss";

const FoodCard = ({ recipe }) => {

  const {
    foodName,
    nationality,
    price,
    imageUrl,
    rating,
    level: { name },
    // rating: { rating },
  } = recipe;

  return (
    <div className="foodcard">
      <div>
        <img className="foodcard__image" src={imageUrl} alt="food image" />
      </div>
      <h3 className="foodcard__title">{foodName}</h3>
      <p className="foodcard__rating">Rating {rating}</p>
      <p className="foodcard__nationality">Nationality: {nationality}</p>
      <p className="foodcard__level">Difficulty: {name}</p>
      <p className="foodcard__price">Price: £{price}</p>
    </div>
  );
};

export default FoodCard;
