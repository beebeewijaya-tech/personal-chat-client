import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component
import { Loading } from "../components";
import GuardedRoute from "../utils/guard";

// Pages
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));
const Register = React.lazy(() => import("../pages/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));

function MainNavigator() {
  const isAutheticated = localStorage.getItem("@token");
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <GuardedRoute path="/" exact auth={isAutheticated}>
            <Home />
          </GuardedRoute>
          <GuardedRoute path="/chat/:id" exact auth={isAutheticated}>
            <Chat />
          </GuardedRoute>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default MainNavigator;
