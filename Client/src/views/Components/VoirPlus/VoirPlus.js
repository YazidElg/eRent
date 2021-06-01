import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Header from "components/Header/Header.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "../Sections/SectionCarousel";
import SectionPills from "../Sections/SectionPills";
import styles2 from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";



const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);


export default function VoirPlus(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
 
  
  

  return (
    <div>
     <AppBar color="transparent">
          <Toolbar>
            <a href="/">
            <img src={require('./apple-icon.png')} className={classes2.logo} />
            </a>
          </Toolbar>
        </AppBar>
      <div className={classNames(classes.main, classes.mainRaised)}>
          <Grid container>
            <Grid item xs={8}>
              <SectionCarousel />
            </Grid>
            <Grid item xs={4}>
              <div className={classes.Card}>
              <Card style={{ width: "20rem" }}>
                <img
                  style={{ height: "180px", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src="..."
                  alt="Card-img-cap"
                />
                <CardBody>
                  <div className={classes.cardTitle}>
                    <h4>Mr Mohammed alaoui</h4>
                  <h3>
                   6500 DH
                  </h3>
                  
                  <Button color="warning">Contacter</Button>
                  </div>
                </CardBody>
              </Card>
              </div>
            </Grid>
          </Grid>
      
        <SectionPills />
      </div>
      <Footer />
    </div>
  );
}
