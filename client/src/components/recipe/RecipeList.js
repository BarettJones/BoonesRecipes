import { List } from "@mui/material";

import Recipe from "./Recipe";

import PropTypes from "prop-types";

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipeName.replaceAll(" ", "-")}
          recipeName={recipe.recipeName}
          recipeDescription={recipe.recipeDescription}
        />
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
