import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import MapIcon from "@material-ui/icons/Map";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function WelcomeSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Bienvenue dans notre site</h2>
          <h5 className={classes.description}>
            Premier site marocain dédié aux étudiants pour trouver leurs
            logement moins chère et le plus rapidement possible
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Recherche simplifié "
              description="Un seule clique et vous trouverez l'appartement qui vous convient grace à notre système de recherche simplifiée et claire"
              icon={Search}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Loueurs vérifiés"
              description="Toutes les personnes qui postent leurs logements en ligne sur notre site sont des gens de confiance qui ont passé différents tests d'éligibilité et de confiance ."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Google maps"
              description="Grace à notre système de mapping vous pourrez voir l'endroit exacte des logements et leurs entourage ainsi qu'une vue paronamique de l'appart"
              icon={MapIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
