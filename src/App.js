import React from "react";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router";
import { history } from "./history";
import Landingpage from "./components/Landingpage";
import { IcecreamDetails } from "./components/IcecreamDetails";
import { Offline } from "react-detect-offline";
import { OfflineHint } from "./components/OfflineHint";

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
      <Router history={history}>
        <Offline>
          <OfflineHint />
        </Offline>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/:id" component={IcecreamDetails} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
