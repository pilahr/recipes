import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.scss";
import Heading from "../../components/Heading/Heading";
import RoundButton from "../../components/Buttons/RoundButton/RoundButton";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-container__heading">
        <Heading />
      </div>
      <div className="welcome">
        <h1>Welcome To My </h1>
        <h1>Favourite Recipes</h1>
        <p className="welcome__text">
          I gathered all of the recipes I love here
        </p>
        <p className="welcome__text">...They can be your favourite too!</p>
        <Link to="/recipes">
          <RoundButton />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default WelcomePage;
