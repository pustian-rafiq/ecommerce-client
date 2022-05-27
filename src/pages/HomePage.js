//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Categories from "../components/home/Categories";
import Collections from "../components/home/Collections";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FeaturedProduct from "../components/home/FeaturedProduct";

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeaturedProduct />
        <Categories />
        <Collections />
      </>
    );
  }
}

export default HomePage;
