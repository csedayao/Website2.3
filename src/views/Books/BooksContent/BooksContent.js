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
import tribe from "assets/img/tribe.png";
import voodoo from "assets/img/voodoo.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import quest from "assets/img/quest.jpg";
import outliers from "assets/img/outliers.jpg";
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
              <h4>
                Creative Quest by Questlove is one of my favorite reads this
                year. After watching an interview with him at the Red Bull Music
                Academy and learning about the art and artists he worked with, I
                did a google search about him and found out he had a book on
                creativity. As someone who actively has been exploring different
                artistic mediums this past year, I saw this as a must read. I
                was not disappointed. Questlove goes in depth with the impulse,
                psychology, and spark behind creative ideas. If you're looking
                to explore your own creativity, I highly recommend this book.{" "}
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="quest">
              <img src={quest}></img>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="quest">
              <img src={outliers}></img>
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
              <h4>
                After listening to an episode of the Broken Record podcast with
                Andre 3000, I had to buy this book after Andre mentioned he was
                absolutely blown away by it. If one of my favorite artists ever
                loved it, I had to check it out. Malcolm Gladwell, a reporter
                for The New Yorker, breaks down the idea of self-made success
                and working from nothing. By going over some of the most
                successful people ever, he asks the question: What makes
                high-achievers different? If you're interested in Psychology,
                history, and learning more about yourself in the process, this
                book is a must read.
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
