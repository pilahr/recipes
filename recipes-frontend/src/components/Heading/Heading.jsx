import React from "react";
import { Link } from "react-router-dom";
import "./Heading.scss";

import Home from "../../assets/images/home.png";
import Add from "../../assets/images/add.png";

const Heading = () => {
  return (
    <div>
      <div className="heading">
        <Link to="/">
          <img className="heading__img-home" src={Home} alt="home icon" />
        </Link>

        <h3 className="heading__header">Piya's Favourite Recipes</h3>

        <Link to="/recipe/create">
          <div className="heading__add">
            <h4 className="heading__add--head">Add Recipe</h4>
            <img className="heading__add--img-add" src={Add} alt="menu icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
