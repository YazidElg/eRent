import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import Footer from "components/Footer/Footer.js";

import Slider from "nouislider";

import styles from "assets/jss/material-kit-react/views/components.js";
import WelcomeSection from "views/LandingPage/Sections/WelcomeSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import SectionsProduit from "../Sections/SectionProduit.js";


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

  
  return (
    <div>
     
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
