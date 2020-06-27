import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinks2 from "components/Header/HeaderLinks2.js";
import Parallax from "components/Parallax/Parallax.js";
import me from "assets/img/IMG_0497 (1).JPG";
import "App.scss";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
// Sections for this pages
import BooksContent from "./BooksContent/BooksContent.js";
import { NavLink } from "react-router-dom";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="C Sedayao."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax extraSmall filter image={require("assets/img/sf3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}></h1>
              <h4></h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BooksContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
