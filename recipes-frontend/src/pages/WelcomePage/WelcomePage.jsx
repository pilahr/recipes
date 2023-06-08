import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.scss";
import Heading from "../../components/Heading/Heading";
import RoundButton from "../../components/Buttons/RoundButton/RoundButton";
import Footer from "../../components/Footer/Footer";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-container__heading">
        <Heading />
      </div>
      <div className="welcome">
        <h1 className="welcome__top">Welcome To My </h1>
        <h1 className="welcome__top">Favourite Recipes</h1>
        <h3 className="welcome__text">
          I gathered all of the recipes I love here
        </h3>
        <h3 className="welcome__text">...They can be your favourite too!</h3>
        <Link to="/recipes">
          <RoundButton />
        </Link>
      </div>
      <div className="welcome-container__footer">
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
