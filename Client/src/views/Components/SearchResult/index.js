import React from "react";
import ComponentItem from "./ComponentItem";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function Result() {
  const classes = useStyles();

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ flexGrow: 1 }}
    >
      <Grid
        style={{ "padding-right": 30, "padding-left": 30, "padding-top": 20 }}
        container
        spacing={3}
      >
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
        <Grid item xs={3}>
          <ComponentItem />
        </Grid>
      </Grid>
    </div>
  );
}
