import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import AppContext from "./AppContext";
import appData from "./appData";

ReactDOM.render(
  <Provider store={store}>
    <AppContext.Provider value={appData}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </AppContext.Provider>
  </Provider>,
  document.getElementById("root")
);
