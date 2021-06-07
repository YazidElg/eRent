import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Components from "./Home/Components.js";
import VoirPlus from "./VoirPlus/VoirPlus.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SearchBar from "./Home/SearchBar.js";
import Result from "./SearchResult";
import Header from "./Header/Header";

const Index = (props) => {
  const { ...rest } = props;
  const dashboardRoutes = [];

  return (
    <>
      <Switch>
        <Route
          path="/Search/:id"
          exact
          render={(props) => <VoirPlus {...props} />}
        />
        <Route
          path="/Search"
          exact
          render={() => (
            <>
              <SearchBar />
              <br />
              <br />
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
              <br />
              <br />
              <Components {...props} />
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default Index;
