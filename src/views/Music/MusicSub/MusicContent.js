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
              <h4>
                Voodoo by D'Angelo is my favorite R&B album of all time. After
                overcoming writer's block following his hit debut album, Brown
                Sugar, D'Angelo found inspiration in making music again after
                the birth of his son. With a dissatisfaction with contemporary
                R&B, he wanted to make a record that reflected true black people
                music. Voodoo isn't an album everyone's going to appreciate. It
                isn't a middle-ground record. You're either going to love it or
                hate it. For me, after listening to hundreds of hours of soulful
                music, this album doesn't sound like any other album that came
                before or after it. He truly pays tribute to the artists that
                came before and inspired countless within the years following.
                It's classic and progressive at the same time: It's timeless.{" "}
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div>
              <img src={voodoo}></img>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div>
              <img src={tribe}></img>
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
                Legendary rap group, A Tribe Called Quest, decided to do one
                last send-off album in 2016 with the death of member, Phife
                Dawg, occuring right before the debut. With an updated sound of
                Rock and R&B alongside their typical Jazz Rap, the group gets
                personal and political. With the album cover and many songs
                including space elements, the group is metaphorically and
                literally leaving the musical world behind. With well-picked
                features and a rare appreciation and understanding of the
                generation after them that not many people in their generation
                seem to have, the group still brings their funny bars, slick
                flows, and earworm beats to the table that any true Tribe fan
                will appreciate.
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
                My favorite album of all time. Kendrick Lamar's To Pimp A
                Butterfly, to me, is the best album of the 2010s. Kendrick's
                understanding of art, society, and himself is unparalleled to
                any other artist in the music industry. For an artist as big as
                Kendrick, to follow up his mega succesful album, Good Kid Maad
                City, a fairly palatable album, with a Jazz, Funk, and Soul
                Hip-Hop album was a huge risk. To say he succeeded though is an
                understatement. If you truly appreciate black people music, this
                is the ultimate album for you. To make the ultimate black people
                music album, Kendrick recruits some of the best musicians in
                those genres. Not only is the music amazing, but the lyrical
                density and complexity, cohesiveness of themes, and
                understanding of how to make his music timeless is what allows
                this album to fully reach its potential. Kendrick, following his
                grammy win for Best Rap Album in 2016, said that "I want you to
                go to sleep playing these songs back in your ear because what
                happens is you grow to understand it more throughout the week,
                throughout the month, throughout the year. Ten years from now
                you'll always find another jewel in there and that was for sure
                the execution that I wanted to go for." This album is like an
                onion. Everytime I go back to it, I find and notice new details
                and layers I didn't even recognize a few listens before. Highly
                recommend this album as a must listen.{" "}
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div class="kendrick2">
              <img src={kendrick}></img>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
