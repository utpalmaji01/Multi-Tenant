import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  return props.condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to={props.redirectPath} />
  );
}

