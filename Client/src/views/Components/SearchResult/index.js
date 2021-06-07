import React, { useEffect } from "react";
import ComponentItem from "./ComponentItem";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Grid from "@material-ui/core/Grid";
import { orange } from "@material-ui/core/colors";
import MyMap from "./MyMap";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const useStyles = makeStyles(styles);

export default function Result() {
  const classes = useStyles();
  const items = useSelector((state) => state.search);
  console.log(items);
  var Markers = [],
    datas = [];
  items.forEach((element) => {
    Markers.push({
      lat: parseFloat(element.latitude_loc),
      lng: parseFloat(element.longitude_loc),
    });
    datas.push({
      titre: element.titre,
      prix: element.prix,
      type: element.type,
      superficie: element.superficie,
      mode: element.mode,
    });
  });

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ flexGrow: 1 }}
    >
      <Grid
        style={{
          paddingRight: 30,
          paddingLeft: 30,
          paddingTop: 20,
        }}
        container
        spacing={2}
      >
        <Grid
          item
          container
          style={{ overflowY: "auto", height: "700px" }}
          spacing={2}
          xs={7}
        >
          {items.map((item, index) => (
            <Grid key={index} item>
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

          {items.length == 0 ? (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <HighlightOffIcon style={{ color: orange[700], fontSize: 250 }} />
              <Grid style={{ color: orange[700] }}>
                <b>Pas de logement</b>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid item style={{ marginLeft: 10 }} xs={5}>
          <MyMap markers={Markers} datas={items} />
        </Grid>
      </Grid>
    </div>
  );
}
