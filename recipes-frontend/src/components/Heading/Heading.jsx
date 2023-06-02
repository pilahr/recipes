import React from "react";
import { Link } from "react-router-dom";
import "./Heading.scss";
import Menu from "../../assets/images/menu.png";
import Home from "../../assets/images/home.png";

const Heading = () => {
  return (
    <div>
      <div className="heading">
        <Link to="/">
          <img className="heading__img-home" src={Home} alt="home icon" />
        </Link>

        <h3 className="heading__header">Piya's Favourite Recipes</h3>

        <Link>
          <img className="heading__img-menu" src={Menu} alt="menu icon" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
