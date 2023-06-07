import React, { useState } from "react";
import "./Form.scss";
import Button from "../Buttons/Button/Button"

const Form = ({ title, handleSubmit, defaultFormState, buttonText, func }) => {
  const [recipe, setRecipe] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

    if (Object.values(recipe).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(recipe);
  };
  return <div className="form-container">
    <h2 className="form-container__title">{title}</h2>
    <form className="form-container__form">
        <label className="form-container__form--label">Recipe Name</label>
        <input className="form-container__form--input"/>
        <label className="form-container__form--label">Ingredients</label>
        <input className="form-container__form--input"/>
        <label className="form-container__form--label">Method</label>
        <input className="form-container__form--input"/>
        <label className="form-container__form--label">Nationality</label>
        <select className="form-container__form--select">
            <option>Select Recipe Nationality</option>
            <option></option>
        </select >
        <label className="form-container__form--label">Level</label>
        <select className="form-container__form--select">
            <option>Select Level</option>
            <option></option>
        </select>
        <label className="form-container__form--label">Vegan</label>
        <select className="form-container__form--select">
            <option>Is it vegan?</option>
            <option></option>
        </select>
        <Button buttonText="Submit" func="update" className="form-container__form--button"/>

    </form>
  </div>;
};

export default Form;
