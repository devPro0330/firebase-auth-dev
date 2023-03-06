import React from "react";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import ForgotPassword from "../components/ForgotPassword";
import Dashboard from "../components/Dashboard";
import UpdateProfile from "../components/UpdateProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function RouteConfig() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default RouteConfig;
