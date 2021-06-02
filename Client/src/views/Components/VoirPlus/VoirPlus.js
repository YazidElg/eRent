import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "../Sections/SectionCarousel";
import SectionPills from "../Sections/SectionPills";
import styles2 from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function VoirPlus(props) {
  const classes = useStyles();
  const [logement, setlogement] = useState({});
  const [user, setuser] = useState({});
  const [images, setimages] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/seemore", {
      logement: props.match.params.id,
    }).then((result) => {
      setlogement(result.data.details);
      setuser(result.data.loueur);
      setimages(result.data.images);
    });
  }, []);

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid container>
          <Grid item xs={8}>
            <SectionCarousel images={images} />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.Card}>
              <Card style={{ width: "20rem" }}>
                <img
                  style={{ height: "180px", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src={require("./apple-icon.png")}
                  alt="Card-img-cap"
                />
                <CardBody>
                  <div className={classes.cardTitle}>
                    <h4>{user.nom ? user.nom : ""}</h4>
                    <h3>{logement.prix ? logement.prix : ""} DH</h3>

                    <Button color="warning">
                      {user.telephone ? user.telephone : ""}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Grid>
        </Grid>

        <SectionPills logement={logement} />
      </div>
      <Footer />
    </div>
  );
}
