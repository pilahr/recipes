import React from "react";
import "./WelcomePage.scss";
import Heading from "../../components/Heading/Heading";
import RoundButton from "../../components/Buttons/RoundButton/RoundButton";

const WelcomePage = () => {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <h1>Welcome To My </h1>
        <h1>Favourite Recipes</h1>
        <p>I gathered all of the recipes I love here</p>
        <p>...They can be your favourite too!</p>
      </div>
      <div>
        <RoundButton />
      </div>
    </div>
  );
};

export default WelcomePage;
