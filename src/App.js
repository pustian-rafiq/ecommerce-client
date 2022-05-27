import React, { Component } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";

export class App extends Component {
  render() {
    return (
      <>
        {/* <BrowserRouter>
          <AppRoute />
        </BrowserRouter> */}
        <HashRouter>
          <AppRoute />
        </HashRouter>
      </>
    );
  }
}

export default App;
