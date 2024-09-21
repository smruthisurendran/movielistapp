import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import "./BackspaceIcon.css";
import { HOME_URL } from "../../core/utils/constant";

const BackspaceIcon = () => {
  const navigate = useNavigate();

  //Function handles the click event of backspace icon
  const handleBackClick = () => {
    navigate(HOME_URL);
  };

  return (
    <IconButton id="navIconButton" onClick={handleBackClick}>
      <KeyboardBackspaceIcon />
    </IconButton>
  );
};
export default BackspaceIcon;
