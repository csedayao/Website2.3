import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";

import "App.scss";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import knight from "assets/img/knight1.jpg";
import chess1 from "assets/img/chess1.PNG";
import chess3 from "assets/img/chess3.PNG";
import altran1 from "assets/img/altran1.PNG";
import project1 from "assets/img/project1.PNG";

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
        <GridContainer justify="center">
          <GridItem xs={18} sm={18} md={10}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={6}
                className={classes.itemGrid}
              ></GridItem>
              <GridItem xs={20} sm={20} md={11.5}>
                <div class="knight">
                  <img src={knight}></img>
                </div>
              </GridItem>

              <h3>
                Task at Hand: Given a chessboard of NxN size, when 2 squares are
                selected, calculate the minimum steps a knight will take to get
                from one square to the other.
              </h3>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={10} sm={10} md={6}>
            <div>
              <img src={chess1}></img>
            </div>
          </GridItem>
          <GridItem xs={10} sm={10} md={6}>
            <div class="chess">
              <img src={chess3}></img>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <Card plain>
            <h4>
              I first saw this problem online and wanted to give it a try. I
              decided to build the board myself using PHP and HTML. To construct
              the board, I implemented a nested-for loop alternating between
              white and black squares. The first page contains the empty
              chessboard. Once the user selects a square, the coordinates are
              then stored and the letter A appears on the clicked square. Once
              the user selects any other square on the chessboard, the
              coordinates from both points are sent to an API call and return
              which squares and how many moves are required for the knight to
              move between.
            </h4>
          </Card>
        </GridContainer>
      </div>
    </div>
  );
}
