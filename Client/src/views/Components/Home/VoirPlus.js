import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "../Sections/SectionCarousel";
import SectionPills from "../Sections/SectionPills";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function VoirPlus(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={8}>
              <SectionCarousel />
              <div className={classes.container}>
                <Button type="button" color="warning">
                  Contacter le loueur
                </Button>
                <Button color="warning">6500dh</Button>
              </div>
            </Grid>
            <Grid item xs={4}>
              <SectionPills />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
