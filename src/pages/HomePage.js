//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Categories from "../components/home/Categories";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FeaturedProduct from "../components/home/FeaturedProduct";

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeaturedProduct />
        <Categories />
      </>
    );
  }
}

export default HomePage;
