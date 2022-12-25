import React, { useState } from "react";

import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";

import PropTypes from "prop-types";

import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Recipe = ({ recipeName, recipeDescription }) => {
  // TODO Add favorited
  const [favorited, setFavorited] = useState(false);
  return (
    <ListItem
      secondaryAction={
        <React.Fragment>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <ShareIcon />
          </IconButton>

          <IconButton>
            {favorited ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </React.Fragment>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={recipeName} secondary={recipeDescription} />
      </ListItemButton>
    </ListItem>
  );
};

Recipe.propTypes = {
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
};

export default Recipe;
