import React, { useState } from "react";
import "./Form.scss";
import Button from "../Buttons/Button/Button";
import Cross from "../../assets/images/cross.png";

const Form = ({ title, handleSubmit, recipeById, handleShowForm }) => {
  const { foodName, imageUrl, ingredients, method, nationality, vegan, level } =
    recipeById;

  const [recipe, setRecipe] = useState(recipeById);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(recipe).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleSubmit(recipe);
  };
  return (
    <div className="form-container">
      <div className="form-container__cross">
        <img src={Cross} alt="cross image" onClick={handleShowForm} />
      </div>
      <h2 className="form-container__title">{title}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <label className="form-container__form--label">Recipe Name</label>
        <input
          className="form-container__form--input"
          placeholder="Name of the recipe"
          value={foodName}
        />
        <label className="form-container__form--label">Ingredients</label>
        <input
          className="form-container__form--input"
          placeholder="Ingredients for the recipe"
          value={ingredients}
        />
        <label className="form-container__form--label">Method</label>
        <input
          className="form-container__form--input"
          placeholder="Recipe method"
          value={method}
        />
        <label className="form-container__form--label">Nationality</label>
        <input
          className="form-container__form--input"
          placeholder="Recipe nationality"
          value={nationality}
        />
        <label className="form-container__form--label">Image URL</label>
        <input
          className="form-container__form--input"
          placeholder="http://www.imageexample.jpeg"
          value={imageUrl}
        />
        <label className="form-container__form--label">Level</label>
        <select className="form-container__form--select">
          {/* <option>{level.name}</option> */}
          <option>Easy</option>
          <option>Medium</option>
          <option>Difficult</option>
        </select>
        <label className="form-container__form--label">Vegan</label>
        <select className="form-container__form--select">
          {/* <option>{vegan.name}</option> */}
          <option>Vegan</option>
          <option>Not Vegan</option>
        </select>
        <div className="form-container__form--button">
          <Button buttonText="Submit" func="update" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
