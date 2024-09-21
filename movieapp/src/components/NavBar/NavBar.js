import React from "react";
import { Typography } from "@mui/material";

import SearchField from "../SearchField/SearchField";
import BackspaceIcon from "../BackSpaceIcon/BackspaceIcon";
import { FONT_COLOR } from "../../core/utils/constant";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const { navTitle } = useSelector((state) => state.content);
  return (
    <div id="navBar">
      <div id="navTitle">
        <BackspaceIcon />
        <Typography variant="subtitle2" color={FONT_COLOR} id="navTypography">
          {navTitle}
        </Typography>
      </div>
      <SearchField />
    </div>
  );
};

export default NavBar;
