import React from "react";
import { ThemeProvider } from "styled-components";
import { Offline } from "react-detect-offline";
import { OfflineHint } from "./components/OfflineHint";
import { history } from "./history";
import { Router, Switch, Route } from "react-router";
import Landingpage from "./components/Landingpage";
import { IcecreamDetails } from "./components/IcecreamDetails";

const theme = {
  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 1,
    outerMargin: 2,
    mediaQuery: "only screen",
    container: {
      sm: 46,
      md: 61,
      lg: 76
    },
    breakpoints: {
      xs: 0,
      sm: 48,
      md: 64,
      lg: 75
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Offline>
        <OfflineHint />
      </Offline>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/:id" component={IcecreamDetails} />
          <Route />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
