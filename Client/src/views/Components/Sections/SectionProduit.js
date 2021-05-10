import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Locations les plus récentes</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Location, Studio</h4>
                    </CardHeader>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src='https://lh3.googleusercontent.com/proxy/u595VJVMSOgZ3SM7zb88lFA_1heHUfID6hfeuTXQ3cYtFnrUCR6Pa3uLyMDUTekn9iFvbY6SJAepfv-Q8xmJ9Eb2ezD6Exk8p8gsattTw-UwHz1PNGaqkk1pYVxq2aZaepzFCuHZ7hZMKpv7d8_T7uwSAIN5PiHBmWuqXiCOKU6dXiS_7fiT7kDYqhMgdn9n8Q' alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Appartement à louer
                <br />
                <small className={classes.smallTitle}>Salé, Hay chmaou</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Appartements meublés de 1 à 2 personnes  25 m². À proximité de Carrefour et de l'école supérieur de technologie de salé, avec wifi et salle de bain

                </p>
                <Button color="warning">Voir plus</Button>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <p>Publiée par : Mohammed alami</p>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Collocation, résidence étudiants</h4>
                    </CardHeader>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src='https://lh3.googleusercontent.com/proxy/u595VJVMSOgZ3SM7zb88lFA_1heHUfID6hfeuTXQ3cYtFnrUCR6Pa3uLyMDUTekn9iFvbY6SJAepfv-Q8xmJ9Eb2ezD6Exk8p8gsattTw-UwHz1PNGaqkk1pYVxq2aZaepzFCuHZ7hZMKpv7d8_T7uwSAIN5PiHBmWuqXiCOKU6dXiS_7fiT7kDYqhMgdn9n8Q' alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Appartement à louer
                <br />
                <small className={classes.smallTitle}>Salé, Hay chmaou</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Appartements meublés de 1 à 2 personnes  25 m². À proximité de Carrefour et de l'école supérieur de technologie de salé, avec wifi et salle de bain

                </p>
                <Button color="warning">Voir plus</Button>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <p>Publiée par : Mohammed alami</p>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Collocation, appartement</h4>
                    </CardHeader>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src='https://lh3.googleusercontent.com/proxy/u595VJVMSOgZ3SM7zb88lFA_1heHUfID6hfeuTXQ3cYtFnrUCR6Pa3uLyMDUTekn9iFvbY6SJAepfv-Q8xmJ9Eb2ezD6Exk8p8gsattTw-UwHz1PNGaqkk1pYVxq2aZaepzFCuHZ7hZMKpv7d8_T7uwSAIN5PiHBmWuqXiCOKU6dXiS_7fiT7kDYqhMgdn9n8Q' alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Appartement à louer
                <br />
                <small className={classes.smallTitle}>Salé, Hay chmaou</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Appartements meublés de 1 à 2 personnes  25 m². À proximité de Carrefour et de l'école supérieur de technologie de salé, avec wifi et salle de bain

                </p>
                <Button color="warning">Voir plus</Button>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <p>Publiée par : Mohammed alami</p>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
