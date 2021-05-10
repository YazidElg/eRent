import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Grid, InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import Slider from "nouislider";

import styles from "assets/jss/material-kit-react/views/components.js";
import WelcomeSection from "views/LandingPage/Sections/WelcomeSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import SectionsProduit from "./Sections/SectionProduit.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  React.useEffect(() => {
    if (
      !document.getElementById("sliderDouble1")
      .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble1"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble2").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble2"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="eRent"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/image_3.png")}>
        <div className={classes.container}>
          <Card style={{ width: "67rem" }}>
            <CardBody>
              <h4 className={classes.cardTitle}>
                CHERCHER VOTRE APPART DE REVE
              </h4>
              <Grid>
                <GridContainer>
                  <Grid item xs={12} sm={12} md={5}  >
                    <CustomInput
                      id="input_search"
                      inputProps={{
                        placeholder: "Université, logement ...",
                      }}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    </Grid>
                    <Grid>
                     <Grid itemxs={12} sm={12} md={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Ville
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="Salé">Salé</MenuItem>
                        <MenuItem value="Rabat">Rabat</MenuItem>
                        <MenuItem value="Casablance"> Casablanca
                        </MenuItem>
                        
                      </Select>
                    </FormControl>
                    </Grid>
                  </Grid>
                  
                  <Grid>
                  <Grid item xs={12} sm={12} md={3} >
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Mode
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="Location">Location</MenuItem>
                        <MenuItem value="Colocation">Colocation</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  </Grid>
                  <Grid>
                    <Grid item xs={12} sm={12} md={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Categorie
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="Appartement">Appartement</MenuItem>
                        <MenuItem value="Studio">Studio</MenuItem>
                        <MenuItem value="Residence étudiants">
                          Residence étudiants
                        </MenuItem>
                        <MenuItem value="Cité universitaire">
                          Cité universitaire
                        </MenuItem>
                      </Select>
                    </FormControl>
                   </Grid>
                  </Grid>
                  <GridItem>
                 
                      <span className="slide-title">Prix max (dh)</span>
                      <div id="sliderDouble1" className="slider-info" />
                    
                  
                      <span className="slide-title">Superficie max (m²)</span>
                      <div id="sliderDouble2" className="slider-info" />
                   
               
                  </GridItem>
                </GridContainer>
              </Grid>
              <Button color="warning">Rechercher</Button>
            </CardBody>
          </Card>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
       
        <SectionsProduit />
        <WelcomeSection />
        <TeamSection />
        <WorkSection />

        
       
      </div>
      <Footer />
    </div>
  );
}
