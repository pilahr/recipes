import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foods from "../src/pages/Foods/Foods";
import FoodsRecipes from "../src/pages/FoodsRecipes/FoodsRecipes";
import WelcomePage from "../src/pages/WelcomePage/WelcomePage";
import CreateRecipe from "../src/pages/CreateRecipe/CreateRecipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch("http://localhost:8080/recipes/");
    const recipeData = await response.json();
    setRecipes(recipeData);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/recipes" element={<Foods />} />
          <Route path="/recipe/edit/:id" element={<FoodsRecipes />} />
          <Route path="/recipe/create" element={<CreateRecipe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
