import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Grid, InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Axios from "axios";

const useStyles = makeStyles(styles);

const SearchBar = () => {
  const [Ville, SetVille] = useState("all");
  const [Univ, SetUniv] = useState([]);
  const classes = useStyles();
  console.log(classes);

  const VilleChange = (e) => {
    SetVille(e.target.value);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: { ville: e.target.value },
    };
    Axios.get("http://localhost:3001/University", config)
      .then((result) => {
        console.log(result.data.res);
        SetUniv(result.data.res);
      })
      .catch((err) => {
        // Do somthing
      });
  };

  return (
    <Parallax image={require("assets/img/image_3.png")}>
      <div className={classes.container}>
        <Card style={{ width: "67rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>CHERCHER VOTRE APPART DE REVE</h4>
            <Grid>
              <GridContainer>
                <Grid item xs={11}>
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
                  <Grid item xs={12} sm={12} md={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Université
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value="all">Tous</MenuItem>
                        {Univ.map((univ, index) => (
                          <MenuItem key={index} value={index}>
                            {univ.nom}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Ville
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={VilleChange}
                        value={Ville}
                      >
                        <MenuItem value="all">Tous</MenuItem>
                        <MenuItem value="salé">Salé</MenuItem>
                        <MenuItem value="Rabat">Rabat</MenuItem>
                        <MenuItem value="Casablance"> Casablanca</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid>
                  <Grid item xs={12} sm={12} md={3}>
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
            <Link to="/Search">
              <Button color="warning">Rechercher</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </Parallax>
  );
};

export default SearchBar;