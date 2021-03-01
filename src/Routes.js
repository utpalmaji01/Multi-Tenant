import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// import SingUp from "./components/core/SingUp.jsx";
import LogIn from "./components/login/LogIn.jsx";
import Register from "./components/register/Register.jsx";
// import PrivateRoute from "./components/privateRoute.jsx";
import history from "./History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/dashBoard/Notes" component={SingUp} />
          </Route> */}
          {/* <Route exact path="/singUp" component={SingUp} /> */}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          {/* <PrivateRoute
            path="/dashBoard"
            redirectPath="/login"
            component={DashBoard}
            condition={
              localStorage.getItem("id") && localStorage.getItem("id").length
            }
          /> */}
        </Switch>
      </Router>
    );
  }
}
