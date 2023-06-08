import { React, useEffect, useState } from "react";
import "./FoodsRecipes.scss";
import FoodRecipe from "../../components/FoodRecipe/FoodRecipe";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Buttons/Button/Button";
import Form from "../../components/Form/Form";
import Spinner from "../../components/Spinner/Spinner";

const FoodsRecipes = ({ vegans, levels }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getRecipeById = async (id) => {
    const url = `http://localhost:8080/recipe/${id}`;
    const response = await fetch(url);
    const recipeData = await response.json();
    setRecipe(recipeData);
  };

  useEffect(() => {
    getRecipeById(id);
  }, []);

  const handleUpdate = async (updatedRecipe) => {
    // const {
    //   foodName,
    //   imageUrl,
    //   ingredients,
    //   method,
    //   nationality,
    //   veganId,
    //   levelId,
    // } = updatedRecipe;

    const result = await fetch(`http://localhost:8080/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (result.ok) {
      alert("Recipe updated");
      const updated = await result.json();
      setRecipe(updated);
      handleShowForm();
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:8080/recipe/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Recipe deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const isLoading = !recipe;
  if (isLoading) return <Spinner />;

  return (
    <div className="foods-recipes">
      <div>
        <Heading />
      </div>
      <div className="foods-recipes__main">
        <div className="foods-recipes__main--desktop-button">
          <Button buttonText="Update" func="update" onClick={handleShowForm} />
          <Button buttonText="Delete" func="delete" onClick={handleDelete} />
        </div>

        <FoodRecipe recipe={recipe} />
        <div className="foods-recipes__main--button">
          <Button buttonText="Update" func="update" onClick={handleShowForm} />
          <Button buttonText="Delete" func="delete" onClick={handleDelete} />
        </div>
      </div>

      {showForm && (
        <div className="food-recipes__form">
          <Form
            title="Update Recipe"
            handleUpdate={handleUpdate}
            handleShowForm={handleShowForm}
            defaultFormState={recipe}
            levels={levels}
            vegans={vegans}
          />
        </div>
      )}
    </div>
  );
};

export default FoodsRecipes;
