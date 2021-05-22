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

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Studio pour étudiants à salé</h3>
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
                        Appartements meublés de 1 à 2 personnes  25 m². À proximité de Carrefour et 
                        de l'école supérieur de technologie de salé, avec wifi et salle de bain

                        </p>
                        <br />
                        <p>
                        Situé à madinat el irfan je vous propose ce studio entièrement meublé et équipé. 
                        il est exposé ouest au 6ème étage avec ascenseur d'un immeuble ancien. 
                        une service conciergerie fait parti du forfait. 
                        a peine vos valises posés, vous sentirez déjà chez vous !
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Options",
                    tabIcon: LibraryAdd,
                    tabContent: (
                      <span>
                        <img src={require('../VoirPlus/o1.PNG')} />
                        <br />
                        <img src={require('../VoirPlus/o2.PNG')} />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Map",
                    tabIcon: Map,
                    tabContent: (
                      <span>
                        <p>
                        Appartements meublés de 1 à 2 personnes  25 m². À proximité de Carrefour et 
                        de l'école supérieur de technologie de salé, avec wifi et salle de bain

                        </p>
                        <br />
                        <p>
                        Situé à madinat el irfan je vous propose ce studio entièrement meublé et équipé. 
                        il est exposé ouest au 6ème étage avec ascenseur d'un immeuble ancien. 
                        une service conciergerie fait parti du forfait. 
                        a peine vos valises posés, vous sentirez déjà chez vous !
                        </p>
          
                      </span>
                    ),
                  },
                ]}
              />
           
        </div>
      </div>
    </div>
  );
}
