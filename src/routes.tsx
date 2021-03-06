import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShows";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* lack of redirect in case of bad url */}
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/tvshow/:id" component={TvShow} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
