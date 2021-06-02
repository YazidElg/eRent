import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Grid, InputLabel } from "@material-ui/core";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Axios from "axios";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import Slider from "@material-ui/core/Slider";

import { search } from "../../../actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(styles);
const useStyles3 = makeStyles(navbarsStyle);
const useStyles2 = makeStyles(() => ({
  thumb: {
    background: "#ff871c",
    "&~&": {
      background: "#ff871c",
    },
  },
  mark: {
    background: "#ff871c",
  },
  rail: {
    background:
      "linear-gradient(to right, #ff871c, orange 50%, orange 50%, #ff871c);",
  },
  track: {
    background: "#ff871c",
  },
  valueLabel: {
    right: "100%",
    "&>*": {
      background: "#ff871c",
    },
  },
}));

const SearchBar = () => {
  const dispatch = useDispatch();

  const [SearchKeyword, SetSearchKeyword] = useState("");
  const [Categ, SetCateg] = useState("all");
  const [Mode, SetMode] = useState("all");

  const [Ville, SetVille] = useState("all");
  const [SelUniv, SetSelUniv] = useState("all");
  const [Univ, SetUniv] = useState([]);
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  console.log(classes);
  useEffect(() => {
    Univupdate("all");
  }, []);
  const Univupdate = (ville) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: { ville: ville },
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

  const Submit = () => {
    Axios.post("http://localhost:3001/Search", {
      search: SearchKeyword,
      mode: Mode,
      city: Ville,
      univ: SelUniv,
      Catg: Categ,
      supL: value2[0],
      supU: value2[1],
      prL: value[0],
      prU: value[1],
    }).then((result) => {
      console.log(result.data.res);
      if (result.data.msg == 0) dispatch(search(result.data.res));
    });
  };

  const VilleChange = (e) => {
    SetVille(e.target.value);
    SetSelUniv("all");
    Univupdate(e.target.value);
  };

  const SearchChange = (e) => {
    SetSearchKeyword(e.target.value);
  };
  const ModeChange = (e) => {
    SetMode(e.target.value);
  };
  const CatChange = (e) => {
    SetCateg(e.target.value);
  };
  const SelUnivChange = (e) => {
    SetSelUniv(e.target.value);
  };

  const [value, setValue] = React.useState([1000, 8000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value2, setValue2] = React.useState([50, 400]);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <>
      <Parallax image={require("assets/img/image_3.png")}>
        <div className={classes.container}>
          <Card style={{ width: "67rem" }}>
            <CardBody>
              <h4 className={classes.cardTitle}>
                CHERCHER VOTRE APPART DE REVE
              </h4>
              <Grid>
                <GridContainer>
                  <Grid item xs={11}>
                    <CustomInput
                      id="input_search"
                      inputProps={{
                        placeholder: "Université, logement ...",
                      }}
                      value={SearchKeyword}
                      onChange={SearchChange}
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
                          value={SelUniv}
                          onChange={SelUnivChange}
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
                          value={Mode}
                          onChange={ModeChange}
                        >
                          <MenuItem value="all">Tous</MenuItem>
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
                          value={Categ}
                          onChange={CatChange}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                        >
                          <MenuItem value="all">Tous</MenuItem>
                          <MenuItem value="Appartement">Appartement</MenuItem>
                          <MenuItem value="Studio">Studio</MenuItem>
                          <MenuItem value="Residence">
                            Residence étudiants
                          </MenuItem>
                          <MenuItem value="CiteUniv">
                            Cité universitaire
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <GridItem>
                    <Typography id="range-slider" gutterBottom>
                      Prix
                    </Typography>
                    <Slider
                      min={0}
                      step={500}
                      max={10000}
                      classes={classes2}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <Typography id="range-slider" gutterBottom>
                      Surface
                    </Typography>
                    <Slider
                      min={0}
                      step={25}
                      max={500}
                      classes={classes2}
                      value={value2}
                      onChange={handleChange2}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                  </GridItem>
                </GridContainer>
              </Grid>
              <Link to="/Search">
                <Button color="warning" onClick={Submit}>
                  Rechercher
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </Parallax>
    </>
  );
};

export default SearchBar;
