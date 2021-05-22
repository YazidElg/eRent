import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import SectionCarousel from "../Sections/SectionCarousel";
const useStyles = makeStyles(styles);

function VoirPlus(props) {
        const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <>
    <Parallax image={require("assets/img/image_3.png")}>
      <div className={classes.container}>
        
      </div>
    </Parallax>
    
    <div className={classes.section}>
      <SectionCarousel/>
    </div>
    </>
  );
    
}

export default VoirPlus;