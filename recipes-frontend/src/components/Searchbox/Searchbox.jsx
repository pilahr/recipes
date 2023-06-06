import React from "react";
import "./Searchbox.scss";
import Search from "../../assets/images/search.png";

const Searchbox = ({ label, handleSearchInput, searchTerm }) => {
  return (
    <div className="search">
      <div className="searchbox">
        <div className="searchbox__wrap">
          <input
            className="searchbox__wrap--input"
            type="text"
            placeholder="Search for the recipe.."
            onInput={handleSearchInput}
            value={searchTerm}
            name={label}
          />
          <img
            className="searchbox__wrap--icon"
            src={Search}
            alt="search icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
