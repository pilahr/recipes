import React, { useState } from "react";
import "./Form.scss";
import Button from "../Buttons/Button/Button";
import Cross from "../../assets/images/cross.png";
import Select from "../Select/Select";

const Form = ({
  title,
  handleUpdate,
  handleShowForm,
  vegans,
  levels,
  defaultFormState,
}) => {
  const { foodName, imageUrl, ingredients, method, nationality, vegan, level } =
    defaultFormState;

  const [recipe, setRecipe] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(recipe).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleUpdate(recipe);
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
          id="recipe"
          type="text"
          onInput={(event) =>
            setRecipe({ ...recipe, foodName: event.target.value })
          }
        />

        <label className="form-container__form--label">Ingredients</label>
        <input
          className="form-container__form--input"
          placeholder="Ingredients for the recipe"
          value={ingredients}
          id="ingredients"
          type="text"
          onInput={(event) =>
            setRecipe({ ...recipe, ingredients: event.target.value })
          }
        />

        <label className="form-container__form--label">Method</label>
        <input
          className="form-container__form--input"
          placeholder="Recipe method"
          value={method}
          id="method"
          type="text"
          onInput={(event) =>
            setRecipe({ ...recipe, method: event.target.value })
          }
        />

        <label className="form-container__form--label">Nationality</label>
        <input
          className="form-container__form--input"
          placeholder="Recipe nationality"
          value={nationality}
          id="nationality"
          type="text"
          onInput={(event) =>
            setRecipe({ ...recipe, nationality: event.target.value })
          }
        />

        <label className="form-container__form--label">Image URL</label>
        <input
          className="form-container__form--input"
          placeholder="http://www.imageexample.jpeg"
          value={imageUrl}
          id="imageUrl"
          type="text"
          onInput={(event) =>
            setRecipe({ ...recipe, imageUrl: event.target.value })
          }
        />

        <label className="form-container__form--label">Level</label>
        <div>
          <Select
            options={levels}
            onChange={(event) =>
              setRecipe({ ...recipe, levelId: event.target.value })
            }
            defaultOption={"Select the level"}
            defaultValue={recipe.levelId}
          />
        </div>
        
        <label className="form-container__form--label">Vegan</label>
        <Select
          options={vegans}
          onChange={(event) =>
            setRecipe({ ...recipe, veganId: event.target.value })
          }
          defaultOption={"Is it vegan?"}
          defaultValue={recipe.veganId}
        />
        <div className="form-container__form--button">
          <Button buttonText="Submit" func="update" onClick={handleUpdate} />
        </div>
      </form>
    </div>
  );
};

export default Form;
