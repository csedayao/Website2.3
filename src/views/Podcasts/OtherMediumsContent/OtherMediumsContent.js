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
import duncan from "assets/img/duncan.jpg";
import record from "assets/img/record.jpg";
import arrival from "assets/img/arrival.jpg";
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
                Arrival, directed by Denis Villeneuve and starring Amy Adams and
                Jeremy Renner, is one of my favorite movies of the 2010s. The
                film follows a linguist (Amy Adams), who is recruited by the US
                government to communicate with aliens who have arrived on earth,
                before tensions lead to war. This film uses the idea of
                language, whether it be human communication or the language of
                film, to drive home the story even more. The film is one that
                challenges the viewer to be actively paying attention; one that
                makes the viewer rewatch the movie from different perspectives
                with multiple viewings. Human communication is one of the
                central themes of the film. Villeneuve invites the viewer to
                think about how critical communication is to society, but at the
                same time, how limited humans are in doing so. This film is a
                must watch for moviegoers who want to deep dive into a film and
                learn more about society and themselves than to be pleased with
                cheap emotions.
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="kendrick3">
              <img src={arrival}></img>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="kendrick">
              <img src={duncan}></img>
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
                I was first introduced to the Duncan Trussell Family Hour after
                watching the show, The Midnight Gospel, on Netflix. Each episode
                is animated to fit the theme and topic of a specific episode of
                Duncan's podcast. The topics mentioned in the show were super
                profound and impactful. The show was an introduction into the
                podcast that really "Explores the outer reaches of the
                multiverse." If you're interested in eastern religion,
                spirituality, or the universe, this podcast is for you.
              </h4>
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
              <h4>
                Broken Record podcast is the ultimate podcast for people who
                truly appreciate music and the artistry process behind it, as
                "For generations, the liner notes on albums were a central part
                of the way music was heard... We intuitively understood that
                great music required not just listening but conversation between
                the artist and the audience and the rest of the world." Hosted
                by Justin Richmond with interviews by famous producer, Rick
                Rubin, and writer, Malcolm Gladwell, the show brings on a
                different musical artist each episode. Discussions about the
                creative process, the music itself, or philosophy behind the art
                are just some topics brought up. My favorite episodes include
                guests Andre 3000, Kevin Parker, and RZA.{" "}
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="kendrick4">
              <img src={record}></img>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
