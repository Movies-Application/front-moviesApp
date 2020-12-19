import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Header, Loading, PrivateRoute } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const SearchLazy = lazy(() => import("./pages/Search/Search"));
const CollectionLazy = lazy(() => import("./pages/Collection/Collection"));
const WatchlistLazy = lazy(() => import("./pages/Watchlist/Watchlist"));
const AboutCollectionLazy = lazy(() =>
  import("./pages/AboutCollection/AboutCollection")
);
const AboutWatchlistLazy = lazy(() =>
  import("./pages/AboutWatchlist/AboutWatchlist")
);

const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));

function Routes() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      <Header
        loggedIn={auth.token}
        logOut={() => {
          auth.updateToken("");
          localStorage.removeItem("token");
          localStorage.removeItem("trending_movie_id");
        }}
      />
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact path="/" component={HomeLazy} />
          <PrivateRoute exact path="/search" component={SearchLazy} />
          <PrivateRoute exact path="/collection" component={CollectionLazy} />
          <PrivateRoute exact path="/watchlist" component={WatchlistLazy} />
          <PrivateRoute
            exact
            path="/collection/about/:title"
            component={AboutCollectionLazy}
          />
          <PrivateRoute
            exact
            path="/watchlist/about/:title"
            component={AboutWatchlistLazy}
          />

          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
