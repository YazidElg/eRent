import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Info from "@material-ui/icons/Info";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import Map from "@material-ui/icons/Map";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import MyMap from "../MyMap";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function SectionPills(props) {
  const classes = useStyles();
  console.log(props.logement);
  return (
    <div className={classes.container}>
      <div id="navigation-pills">
        <div className={classes.title}>
          <h3>{props.logement.titre ? props.logement.titre : ""}</h3>
        </div>

        <NavPills
          color="primary"
          tabs={[
            {
              tabButton: "Info",
              tabIcon: Info,
              tabContent: (
                <span>
                  <p>
                    {props.logement.description
                      ? props.logement.description
                      : ""}
                  </p>
                </span>
              ),
            },
            {
              tabButton: "Critères",
              tabIcon: LibraryAdd,
              tabContent: (
                <Grid container>
                  <Grid item xs={3}>
                    <img src={require("../VoirPlus/furnitures.png")} /> Meublé
                    ou pas meublé ?<h2>Meublé</h2>
                  </Grid>
                  <Grid item xs={3}>
                    <img src={require("../VoirPlus/area.png")} /> Surface :
                    <h2>25 m²</h2>
                  </Grid>
                  <Grid item xs={3}>
                    <img src={require("../VoirPlus/appartment.png")} /> Type de
                    logement :<h2>Studio</h2>
                  </Grid>
                  <Grid item xs={3}>
                    <img src={require("../VoirPlus/room.png")} /> Nombres de
                    chambres :<h2>2</h2>
                  </Grid>
                </Grid>
              ),
            },
            {
              tabButton: "Map",
              tabIcon: Map,
              tabContent: <span></span>,
            },
          ]}
        />
      </div>
    </div>
  );
}
