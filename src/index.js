import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/icons/icomoon/styles.css";
import "./assets/css/bootstrap.css";
import "./assets/css/core.css";
import "./assets/css/components.css";
import "./assets/css/colors.css";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/admin" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
