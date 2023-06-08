import React from "react";
import "./CreateForm.scss";
import Button from "../Buttons/Button/Button";
import Cross from "../../assets/images/cross.png";

const CreateForm = ({ title, handleShowForm }) => {
  return (
    <div className="create-form-container">
      <h2 className="create-form-container__title">{title}</h2>
      <form className="create-form-container__form">
        <label className="create-form-container__form--label">
          Recipe Name
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Name of the recipe"
        />
        <label className="create-form-container__form--label">
          Ingredients
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Ingredients for the recipe"
        />
        <label className="create-form-container__form--label">Method</label>
        <input
          className="create-form-container__form--input"
          placeholder="Recipe method"
        />
        <label className="create-form-container__form--label">
          Nationality
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Recipe nationality"
        />
        <label className="create-form-container__form--label">Image URL</label>
        <input
          className="create-form-container__form--input"
          placeholder="http://www.image.jpeg"
        />
        <label className="create-form-container__form--label">Level</label>
        <select className="create-form-container__form--select">
          {/* <option>{level.name}</option> */}
          <option>Easy</option>
          <option>Medium</option>
          <option>Difficult</option>
        </select>
        <label className="create-form-container__form--label">Vegan</label>
        <select className="create-form-container__form--select">
          {/* <option>{vegan.name}</option> */}
          <option>Vegan</option>
          <option>Not Vegan</option>
        </select>
        <div className="create-form-container__form--button">
          <Button buttonText="Submit" func="create" />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
