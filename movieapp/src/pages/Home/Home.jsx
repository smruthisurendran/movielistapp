import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

import {
  ROMANTIC_COMEDY,
  ROMANTIC_COMEDY_URL,
} from "../../core/utils/constant";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  //Function that handles the click event of button
  const handleClick = () => {
    navigate(ROMANTIC_COMEDY_URL);
  };

  return (
    <Paper elevation={3} id="paperPattern">
      <Button variant="outlined" onClick={handleClick} id="buttonStyle">
        {ROMANTIC_COMEDY}
      </Button>
    </Paper>
  );
};
export default Home;
