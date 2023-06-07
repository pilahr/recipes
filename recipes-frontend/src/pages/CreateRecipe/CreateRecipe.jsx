import React from "react";
import "./CreateRecipe.scss";
import CreateForm from "../../components/CreateForm/CreateForm";
import Heading from "../../components/Heading/Heading";

const CreateRecipe = () => {
  return (
    <div className="create-recipe-page">
      <Heading className="create-recipe-page__heading" />
      <div className="create-recipe-page__form">
        <></>
        <CreateForm title="Create the Recipe" />
      </div>
    </div>
  );
};

export default CreateRecipe;
