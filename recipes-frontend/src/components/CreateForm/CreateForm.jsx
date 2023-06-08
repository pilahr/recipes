import React, { useState } from "react";
import "./CreateForm.scss";
import Button from "../Buttons/Button/Button";
import Select from "../Select/Select";

const CreateForm = ({
  title,
  handleSubmit,
  vegans,
  levels,
  defaultFormState,
}) => {
  const [recipe, setRecipe] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(recipe).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(recipe);
  };
  return (
    <div className="create-form-container">
      <h2 className="create-form-container__title">{title}</h2>
      <form className="create-form-container__form" onSubmit={handleValidation}>
        <label className="create-form-container__form--label">
          Recipe Name
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Name of the recipe"
          id="recipe"
          type="text"
          value={recipe.foodName}
          onInput={(event) =>
            setRecipe({ ...recipe, foodName: event.target.value })
          }
        />
        <label className="create-form-container__form--label">
          Ingredients
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Ingredients for the recipe"
          id="ingredients"
          type="text"
          value={recipe.ingredients}
          onInput={(event) =>
            setRecipe({ ...recipe, ingredients: event.target.value })
          }
        />
        <label className="create-form-container__form--label">Method</label>
        <input
          className="create-form-container__form--input"
          placeholder="Recipe method"
          id="method"
          type="text"
          value={recipe.method}
          onInput={(event) =>
            setRecipe({ ...recipe, method: event.target.value })
          }
        />
        <label className="create-form-container__form--label">
          Nationality
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="Recipe nationality"
          id="nationality"
          type="text"
          value={recipe.nationality}
          onInput={(event) =>
            setRecipe({ ...recipe, nationality: event.target.value })
          }
        />
        <label className="create-form-container__form--label">Image URL</label>
        <input
          className="create-form-container__form--input"
          placeholder="http://www.image.jpeg"
          id="imageUrl"
          type="text"
          value={recipe.imageUrl}
          onInput={(event) =>
            setRecipe({ ...recipe, imageUrl: event.target.value })
          }
        />
        <label className="create-form-container__form--label">Level</label>
        <div>
          <Select
            className="create-form-container__form--select"
            options={levels}
            onChange={(event) =>
              setRecipe({ ...recipe, levelId: event.target.value })
            }
            defaultOption={"Select the level"}
            defaultValue={recipe.levelId}
          />
        </div>

        <label className="create-form-container__form--label">Vegan</label>
        <Select
          className="create-form-container__form--select"
          options={vegans}
          onChange={(event) =>
            setRecipe({ ...recipe, veganId: event.target.value })
          }
          defaultOption={"Is it vegan?"}
          defaultValue={recipe.veganId}
        />

        <div className="create-form-container__form--button">
          <Button buttonText="Submit" func="create" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
