import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header";
import TablesPage from "../Pages/TablesPage";
import HomePage from "../Pages/HomePage";
import DishesPage from "../Pages/DishesPage";

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/tables" exact>
          <TablesPage />
        </Route>
        <Route path="/dishes" exact>
          <DishesPage />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
