import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Vehicles from "./pages/Vehicles.js";
import Settings from "./pages/Settings.js";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/vehicles">
          <Vehicles />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
