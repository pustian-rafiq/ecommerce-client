import React, { Component } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";

export class AppRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    );
  }
}

export default AppRoute;
