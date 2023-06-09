import React from "react";
import "./CreateRecipe.scss";
import CreateForm from "../../components/CreateForm/CreateForm";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";

const CreateRecipe = ({ vegans, levels }) => {
  const navigate = useNavigate();

  const handleSubmit = async (recipe) => {
    // console.log(recipe);
    const result = await fetch("http://localhost:8080/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (result.ok) {
      alert("Recipe added");
      const recipe = await result.json();
      navigate("/recipe/edit/" + recipe.id, { state: recipe });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    foodName: "",
    ingredients: "",
    method: "",
    nationality: "",
    imageUrl: "",
  };

  return (
    <div className="create-recipe-page">
      <Heading className="create-recipe-page__heading" />
      <div className="create-recipe-page__form">
        <></>
        <CreateForm
          title="Add A New Recipe"
          handleSubmit={handleSubmit}
          defaultFormState={defaultFormState}
          vegans={vegans}
          levels={levels}
        />
      </div>
    </div>
  );
};

export default CreateRecipe;
