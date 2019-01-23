import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./common/Home";
import NotFound from "./common/404";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
