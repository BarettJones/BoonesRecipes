import RecipeItem from "./components/recipe/RecipeItem";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const recipeArray = [
    {
      recipeName: "chicken pot pie",
      recipeDescription: "juicy",
      recipeOwner: "Barett",
    },
    {
      recipeName: "cookie",
      recipeDescription: "moist",
      recipeOwner: "Michael",
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
