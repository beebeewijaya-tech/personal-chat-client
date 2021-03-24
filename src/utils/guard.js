import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ children, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth ? { ...children } : <Redirect to="/login" />)}
  />
);

export default GuardedRoute;
