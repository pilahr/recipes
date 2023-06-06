import React from "react";
import "./FoodCard.scss";

const FoodCard = ({ foodName, rating, nationality, level, price, image }) => {
  return (
    <div className="foodcard">
      <div className="foodcard__image">
        <img src={image} alt="food image" />
      </div>
      <h3 className="foodcard__title">Food{foodName}</h3>
      <p className="foodcard__rating">Rating {rating}!</p>
      <p className="foodcard__nationality">Nationality: {nationality}</p>
      <p className="foodcard__level">Difficulty: {level}</p>
      <p className="foodcard__price">Price: £{price}</p>
    </div>
  );
};

export default FoodCard;
