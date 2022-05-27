import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export class HomePage extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon icon={faCoffee} />
      </>
    );
  }
}

export default HomePage;
