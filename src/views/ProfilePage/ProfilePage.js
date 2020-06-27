import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Computer from "@material-ui/icons/Computer";
import Keyboard from "@material-ui/icons/Keyboard";
import Build from "@material-ui/icons/Build";
import Code from "@material-ui/icons/Code";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import "App.scss";
import IMG_1016 from "assets/img/faces/IMG_1016.JPG";
import Tooltip from "@material-ui/core/Tooltip";
import javascript from "assets/img/javascript.png";
import react from "assets/img/react.png";
import cSharp from "assets/img/csharp.png";
import php from "assets/img/php-1-logo.png";
import java from "assets/img/java3.png";
import html from "assets/img/htmlcss.jpg";
import sql from "assets/img/sql.png";
import sql2 from "assets/img/sql.jpg";
import github from "assets/img/github.png";
import gitlab from "assets/img/gitlab.png";
import jira from "assets/img/jira.png";
import vs from "assets/img/vs.png";
import jenkins from "assets/img/jenkins.png";
import vscode from "assets/img/vs code.jpg";
import chrome from "assets/img/chrome.jpg";
import ms from "assets/img/ms.jpg";
import quest from "assets/img/quest.jpg";
import outliers from "assets/img/outliers.jpg";
import duncan from "assets/img/duncan.jpg";
import record from "assets/img/record.jpg";
import arrival from "assets/img/arrival.jpg";
import tribe from "assets/img/tribe.png";
import voodoo from "assets/img/voodoo.jpg";
import kendrick from "assets/img/kendrick.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { NavLink } from "react-router-dom";
import project5 from "assets/img/project5.PNG";
import chess1 from "assets/img/chess1.PNG";
import chess2 from "assets/img/chess2.PNG";
import chess3 from "assets/img/chess3.PNG";
import altran1 from "assets/img/altran4.PNG";
import altran2 from "assets/img/altran3.jpg";
import knight from "assets/img/knight1.jpg";
import discipline from "assets/img/discipline2.PNG";
import company from "assets/img/company.PNG";
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="C Sedayao."
        target="_blank"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/sf3.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={IMG_1016} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christopher Sedayao</h3>
                    <h6>Developer</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Hi! I'm Chris — A developer interested in front-end development
                and UI/UX design. Being born and raised in the San Francisco Bay
                Area, I have long been interested in exploring the intersection
                between technicality and creativity.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Skills",
                      tabIcon: Keyboard,
                      tabContent: (
                        <NavPills
                          horizontal
                          color="info"
                          tabs={[
                            {
                              tabButton: "Code",
                              tabIcon: Code,
                              tabContent: (
                                <GridContainer justify="center">
                                  <GridItem xs={12} sm={12} sm={4}>
                                    <Tooltip
                                      title="JavaScript"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={javascript}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="ReactJS"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={react}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="C#"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={cSharp}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                  </GridItem>
                                  <GridItem xs={12} sm={12} sm={4} sm={4}>
                                    <Tooltip
                                      title="SQL"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={sql}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="Java"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={java}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="HTML/CSS"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={html}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>

                                    <Tooltip
                                      title="PHP"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={php}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: "Tools",
                              tabIcon: Build,
                              tabContent: (
                                <GridContainer justify="center">
                                  <GridItem xs={12} sm={12} sm={4} sm={4}>
                                    <Tooltip
                                      title="GitHub"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={github}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="GitLab"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={gitlab}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="Jira"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={jira}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="Visual Studio Code"
                                      placement={"left"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={vscode}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                  </GridItem>
                                  <GridItem xs={12} sm={12} sm={4} sm={4}>
                                    <Tooltip
                                      title="Visual Studio"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={vs}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="Chrome DevTools"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={chrome}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                    <Tooltip
                                      title="SQL Server Management Studio"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={ms}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>

                                    <Tooltip
                                      title="Jenkins"
                                      placement={"right"}
                                      classes={{ tooltip: classes.tooltip }}
                                    >
                                      <img
                                        alt="..."
                                        src={jenkins}
                                        className={navImageClasses}
                                      />
                                    </Tooltip>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                          ]}
                        ></NavPills>
                      ),
                    },
                    {
                      tabButton: "Projects",
                      tabIcon: Computer,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <Tooltip
                              title="Click to see more about the ARM 2.0 Project"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/arm2.0">
                                <img
                                  alt="..."
                                  src={altran1}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the ARM 2.0 Project"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/arm2.0">
                                <img
                                  alt="..."
                                  src={project5}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the ARM 2.0 Project"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/arm2.0">
                                <img
                                  alt="..."
                                  src={company}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the Chessboard project"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/chessboard">
                                <img
                                  alt="..."
                                  src={knight}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the Chessboard project"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/chessboard">
                                <img
                                  alt="..."
                                  src={chess3}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Tooltip
                              title="Click to see more about the ARM 2.0 Project"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/arm2.0">
                                <img
                                  alt="..."
                                  src={altran2}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the ARM 2.0 Project"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/arm2.0">
                                <img
                                  alt="..."
                                  src={discipline}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Click to see more about the Chessboard project"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/chessboard">
                                <img
                                  alt="..."
                                  src={chess2}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                          </GridItem>
                        </GridContainer>
                      ),
                    },

                    {
                      tabButton: "Favorites",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <Tooltip
                              title="Creative Quest by Questlove"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/books">
                                <img
                                  alt="..."
                                  src={quest}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Broken Record Podcast"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/other-mediums">
                                <img
                                  alt="..."
                                  src={record}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Arrival"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/other-mediums">
                                <img
                                  alt="..."
                                  src={arrival}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Voodoo by D'Angelo"
                              placement={"left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/music">
                                <img
                                  alt="..."
                                  src={voodoo}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Tooltip
                              title="Outliers by Malcolm Gladwell"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/books">
                                <img
                                  alt="..."
                                  src={outliers}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="Duncan Trussell Family Hour"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/other-mediums">
                                <img
                                  alt="..."
                                  src={duncan}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="We Got It from Here... Thank You 4 Your Service by A Tribe Called Quest"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/music">
                                <img
                                  alt="..."
                                  src={tribe}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                            <Tooltip
                              title="To Pimp A Butterfly by Kendrick Lamar"
                              placement={"right"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="/music">
                                <img
                                  alt="..."
                                  src={kendrick}
                                  className={navImageClasses}
                                />
                              </a>
                            </Tooltip>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
