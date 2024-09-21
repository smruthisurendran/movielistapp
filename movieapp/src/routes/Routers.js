import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MovieContent from "../pages/MovieContent/MovieContent";
import Home from "../pages/Home/Home";
import {
  HOME_URL,
  ROMANTIC_COMEDY_URL,
  WILDCARD_URL,
} from "../core/utils/constant";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROMANTIC_COMEDY_URL} element={<MovieContent />} />
        <Route path={HOME_URL} element={<Home />} />
        <Route path={WILDCARD_URL} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routers;
