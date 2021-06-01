import React, { useEffect } from "react";
import ComponentItem from "./ComponentItem";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Grid from "@material-ui/core/Grid";
import MyMap from "./MyMap";
import { useSelector } from "react-redux";
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
        </Grid>
        <Grid item style={{ marginLeft: 10 }} xs={5}>
          <MyMap markers={Markers} datas={[]} />
        </Grid>
      </Grid>
    </div>
  );
}
