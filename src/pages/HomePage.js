//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collections from "../components/home/Collections";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";

export class HomePage extends Component {
  render() {
    return (
      <>
        <NavMenuDesktop />
        <HomeTop />
        <FeaturedProduct />
        <Categories />
        <Collections />
        <NewArrival />
      </>
    );
  }
}

export default HomePage;
