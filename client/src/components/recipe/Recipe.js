import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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

const Recipe = ({ recipeId, recipeName, recipeDescription, recipeOwner }) => {
  // TODO Add favorited
  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(recipeOwner + "/" + recipeId);
  };

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
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={recipeName} secondary={recipeDescription} />
      </ListItemButton>
    </ListItem>
  );
};

Recipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeOwner: PropTypes.string.isRequired,
};

export default Recipe;
