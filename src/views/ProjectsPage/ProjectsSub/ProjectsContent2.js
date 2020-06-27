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
import quest from "assets/img/quest.jpg";
import record from "assets/img/record.jpg";
import kendrick from "assets/img/kendrick.jpg";
import project5 from "assets/img/project5.PNG";
import chess1 from "assets/img/chess3.PNG";
import altran2 from "assets/img/altran3.jpg";
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
          <GridItem xs={12} sm={12} md={4}>
            <div class="record">
              <a href="/chessboard">
                <img src={chess1}></img>
              </a>
            </div>
          </GridItem>
          <GridItem xs={8} sm={8} md={0}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              ></GridItem>
              <h2 className={classes.title}>
                Learn more about the chessboard project.
              </h2>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
