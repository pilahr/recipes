import React from "react";
import "./Heading.scss";
import Menu from "../../assets/images/menu.png";
import Home from "../../assets/images/home.png"

const Heading = () => {
  return (
    <div>
      <div className="heading">
        <img className="heading__img-home" src={Home} alt="home icon" />
        <h3 className="heading__header">Piya's Favourite Recipes</h3>
        <img className="heading__img-menu" src={Menu} alt="menu icon" />
        
      </div>
    </div>
  );
};

export default Heading;
