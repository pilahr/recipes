import React from "react";
import "./RoundButton.scss";

const RoundButton = () => {
  return (
    <div className="roundbtn">
      <button className="roundbtn__btn">Explore the recipes
        <div className="roundbtn__btn--blink">click me!</div>
      </button>
    </div>
  );
};

export default RoundButton;
