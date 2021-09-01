import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SessionContext from "../context/SessionContext";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateBlog from "../pages/CreateBlog";

export default function Routes() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  return (
    <Switch>
      <LoginRoute path="/login" component={Login} access_token={access_token} />
      <Route path="/" component={Home} access_token={access_token} exact />
      <PrivateRoute
        path="/createblog"
        component={CreateBlog}
        access_token={access_token}
        exact
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function LoginRoute({ path, component: Component, access_token, ...props }) {
  return (
    <Route
      {...props}
      path={path}
      render={(props) =>
        access_token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

function PrivateRoute({ path, component: Component, access_token, ...props }) {
  return (
    <Route
      {...props}
      path={path}
      render={(props) =>
        access_token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
