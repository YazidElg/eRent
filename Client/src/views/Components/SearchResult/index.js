import React from "react";
import ComponentItem from "./ComponentItem";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";

import { useSelector } from "react-redux";
const useStyles = makeStyles(styles);

export default function Result() {
  const classes = useStyles();
  const items = useSelector((state) => state.search);
  console.log(items);
  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ flexGrow: 1 }}
    >
      <Grid
        style={{ paddingRight: 30, paddingLeft: 30, paddingTop: 20 }}
        container
        spacing={3}
      >
        {items.map((item, index) => (
          <Grid key={index} item xs={3}>
            <ComponentItem
              key={index}
              titre={item.titre}
              prix={item.prix}
              idL={item.id_loc}
              desc={item.description}
              img={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
