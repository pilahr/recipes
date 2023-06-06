import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foods from "../src/pages/Foods/Foods";
import FoodsRecipes from "../src/pages/FoodsRecipes/FoodsRecipes";
import WelcomePage from "../src/pages/WelcomePage/WelcomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>

        <Routes>
          <Route path="/recipes" element={<Foods />} />
          <Route path="/recipe/:id" element={<FoodsRecipes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
