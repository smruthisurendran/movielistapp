import React from "react";
import { IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./NavBar.css";
import SearchField from "../SearchField/SearchField";

const NavBar = () => {
  return (
    <div id="navBar">
      <div id="navTitle">
        <IconButton id="navIconButton">
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography variant="subtitle2" color="#ffffff" id="navTypography">
          Romantic Comedy
        </Typography>
      </div>
      <SearchField />
    </div>
  );
};

export default NavBar;
