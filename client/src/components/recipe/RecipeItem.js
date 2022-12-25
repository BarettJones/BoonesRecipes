import React from "react";

import { Paper, Typography } from "@mui/material";

const RecipeItem = () => {
  const title = "Uncle papas famous chicken dinner roast";
  const ingredients = ["1/2 cup eggs", "1 chicken", "some milk"];
  const directions = ["Bake", "take out", "eat"];
  const notes =
    "Yes, you can freeze homemade mac and cheese if you don't plan to eat it within four days. Transfer your leftovers to zip-top freezer bags in serving-size portions. Wrap each bag in foil, then freeze flat for up to six months. Thaw in the refrigerator overnight.";
  return (
    <Paper elevation={3}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", pt: 3 }}
        align="center"
      >
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", pt: 3 }}>
        Ingredients
      </Typography>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <Typography variant="h4" sx={{ fontWeight: "bold", pt: 3 }}>
        Directions
      </Typography>
      <ol>
        {directions.map((direction) => (
          <li>{direction}</li>
        ))}
      </ol>
      <Typography variant="h4" sx={{ fontWeight: "bold", pt: 3 }}>
        Notes
      </Typography>
      <Typography variant="body1">{notes}</Typography>
    </Paper>
  );
};

export default RecipeItem;
