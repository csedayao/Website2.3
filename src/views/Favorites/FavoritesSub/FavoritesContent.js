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
              <h2 className={classes.title}>
                Check out my favorite reads of this year so far.
              </h2>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="quest">
              <a href="/books">
                <img src={quest}></img>
              </a>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="record">
              <a href="/other-mediums">
                <img src={record}></img>
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
                While you're still here, feel free to check out some of my
                favorite podcasts and movies too.
              </h2>
            </Card>
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
                And even some of my favorite music.
              </h2>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="kendrick">
              <a href="/music">
                <img src={kendrick}></img>
              </a>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
