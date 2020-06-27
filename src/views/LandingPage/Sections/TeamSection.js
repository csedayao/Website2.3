import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import "App.scss";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import me from "assets/img/IMG_0497 (1).JPG";
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={8} sm={8} md={0}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              ></GridItem>
              <h2 className={classes.title}>Welcome!</h2>
              <h4 className={classes.description}>
                I'm Chris - a rising fourth-year at Northeastern University
                studying Computer Science and Cognitive Psychology with a minor
                in Film Production. I gained an interest in UI/UX design and a
                focus for front-end development this past year after actively
                exploring different creative mediums. Being able to approach
                technical issues with fluid and notional rationality is how I
                want to establish my career in the tech industry. I am
                originally from the heart of Silicon Valley, but now reside in
                Boston, MA. Talk to me about high-end fashion, Formula One, or
                soulful music. Always open to meeting new people and exploring
                fields.
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="me">
              <img src={me}></img>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
