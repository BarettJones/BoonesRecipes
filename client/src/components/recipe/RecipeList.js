import { List } from "@mui/material";

import Recipe from "./Recipe";

import PropTypes from "prop-types";

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => {
        const id = recipe.recipeName.replaceAll(" ", "-");
        return (
          <Recipe
            key={id}
            recipeId={id}
            recipeName={recipe.recipeName}
            recipeDescription={recipe.recipeDescription}
            recipeOwner={recipe.recipeOwner}
          />
        );
      })}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
