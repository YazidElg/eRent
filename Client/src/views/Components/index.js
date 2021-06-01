import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Components from "./Home/Components.js";
import VoirPlus from "./VoirPlus/VoirPlus.js";

import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SearchBar from "./Home/SearchBar.js";
import Result from "./SearchResult";

const Index = (props) => {
  const { ...rest } = props;

  return (
    <>
      <Switch>
        <Route path="/Search/:id" exact render={(props) => <VoirPlus />} />
        <Route
          path="/Search"
          exact
          render={() => (
            <>
              <SearchBar />
              <Result {...props} />
            </>
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <SearchBar />
              <Components {...props} />
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default Index;
