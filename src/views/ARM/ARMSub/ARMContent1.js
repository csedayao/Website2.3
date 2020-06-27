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
import altran1 from "assets/img/altran1.PNG";
import project1 from "assets/img/project1.PNG";
import project2 from "assets/img/project2.PNG";
import project3 from "assets/img/project3.PNG";
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
                <div class="altran">
                  <img src={altran2}></img>
                </div>
              </GridItem>

              <h3>
                Task at Hand: Building a cleaner, smarter, and more efficient
                resourcing tool for managers to allocate resources to employees
                and projects.
              </h3>
              <h4>
                Altran is the world leader in engineering and R&D services.
                Altran offers its clients a unique value proposition to meet
                their transformation and innovation challenges. Altran supports
                its clients, from concept through industrialization, to develop
                the products and services of tomorrow and has been working for
                more than 35 years with major players in many sectors:
                Automotive, Aeronautics, Space, Defense & Naval, Rail,
                Infrastructure & Transport, Energy, Industrial & Consumer, Life
                Sciences, Communications, Semiconductor & Electronics, Software
                & Internet, Finance & Public Sector.
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={10} sm={10} md={6}>
            <div class="altran">
              <img src={altran1}></img>
            </div>
          </GridItem>
          <GridItem xs={10} sm={10} md={6}>
            <div class="project2">
              <img src={project1}></img>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <Card plain>
            <h4>
              I am currently employed as a software engineer at Altran, an
              engineering consulting company in Burlington, MA, as a part of
              Northeastern University's cooperative education program. At
              Altran, I work with other engineers in an Agile environment to
              redesign the company's outdated managerial resourcing tool called
              ARM (Altran Resource Management). Our stack is done in React.js
              for the front-end, C# for the back-end, and SQL for the database.
            </h4>
          </Card>
        </GridContainer>
        <GridContainer>
          <GridItem xs={10} sm={10} md={6}>
            <div class="altran">
              <img src={project2}></img>
            </div>
          </GridItem>
          <GridItem xs={10} sm={10} md={6}>
            <div class="altran">
              <img src={project3}></img>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <Card plain>
            <h4>
              Constructing ARM 2.0 from scratch is no small task. One of the
              many undertakings I do is implementing CRUD (Create, Read, Update,
              Delete) features similar to the old resourcing platform. Done
              within an MVC framework, I write API calls in the back-end to move
              data from the database to the front-end. A majority of the time
              spent on this project has been in the front-end with React.js.
              Learning more about UI/UX design principles and getting
              comfortable with HTML/CSS has been crucial in implenting an
              intuitive and easy to use platform. My time at Altran has been one
              of the best learning experiences any young developer could ask
              for.
            </h4>
          </Card>
        </GridContainer>
      </div>
    </div>
  );
}
