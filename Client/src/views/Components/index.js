import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Components from "./Home/Components.js";

import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SearchBar from "./Home/SearchBar.js";


const Index = (props) => {
  const { ...rest } = props;
  
  return (
    <>
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

     
      <Switch>
        <Route
          path="/Search/:id"
          exact
          render={(props) => <div>voir plus : {props.match.params.id}</div>}
        />
        <Route path="/Search" exact render={()=>  <SearchBar/> } />
        <Route path="/" exact render={(props) => <><SearchBar /><Components {...props} /></>} />
      </Switch>
    </>
  );
};

export default Index;
