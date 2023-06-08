import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foods from "../src/pages/Foods/Foods";
import FoodsRecipes from "../src/pages/FoodsRecipes/FoodsRecipes";
import WelcomePage from "../src/pages/WelcomePage/WelcomePage";
import CreateRecipe from "../src/pages/CreateRecipe/CreateRecipe";

const App = () => {
  const [vegans, setVegans] = useState([]);
  const [levels, setLevels] = useState([]);

  const getVegans = async () => {
    const response = await fetch("http://localhost:8080/recipes/vegan-options");
    const recipeData = await response.json();
    setVegans(recipeData);
  };

  const getLevels = async () => {
    const response = await fetch("http://localhost:8080/recipes/level-options");
    const recipeData = await response.json();
    setLevels(recipeData);
  };

  useEffect(() => {
    getLevels();
    getVegans();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/recipes" element={<Foods />} />
          <Route
            path="/recipe/edit/:id"
            element={<FoodsRecipes vegans={vegans} levels={levels} />}
          />
          <Route
            path="/recipe/create"
            element={<CreateRecipe vegans={vegans} levels={levels} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
