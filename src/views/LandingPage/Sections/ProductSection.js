import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import "App.scss";
import me from "assets/img/IMG_0497 (1).JPG";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hello!</h2>
          <h4 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.____________________________________________________________
            ________________________________________________________________
            ---------------------------------------------------------------
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <div class="me">
            <img src={me}></img>
          </div>
        </GridItem>
      </GridContainer>
      <div></div>
    </div>
  );
}
