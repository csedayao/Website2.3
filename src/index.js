import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import FavoritesHome from "views/Favorites/FavoritesHome.js";
import ProjectsHome from "views/ProjectsPage/ProjectsHome.js";
import ARM from "views/ARM/ARM.js";
import Chessboard from "views/Chessboard/Chessboard.js";
import Music from "views/Music/Music.js";
import Books from "views/Books/Books.js";
import OtherMediums from "views/Podcasts/OtherMediums.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={ProfilePage} />
      <Route path="/about-me" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/favorites" component={FavoritesHome} />
      <Route path="/projects" component={ProjectsHome} />
      <Route path="/arm2.0" component={ARM} />
      <Route path="/chessboard" component={Chessboard} />
      <Route path="/music" component={Music} />
      <Route path="/books" component={Books} />
      <Route path="/other-mediums" component={OtherMediums} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
