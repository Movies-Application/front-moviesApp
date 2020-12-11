import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Loading } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));

function Routes() {
  return (
    <Router>
      {/* <Header /> */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy}></Route>
          <Route exact path="/about" component={AboutLazy}></Route>
          <Route exact path="/login" component={LoginLazy}></Route>
          <Route exact path="/register" component={RegisterLazy}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;