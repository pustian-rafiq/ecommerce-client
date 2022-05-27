import React, { Component } from "react";
import Slider from "react-slick/lib/slider";

class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="col-md-6 animated slideInDown text-center">
            <img
              className="slider-img"
              src="https://icms-image.slatic.net/images/ims-web/7082b8c5-df31-41a0-bdd3-9ae387c6c674.jpg"
              alt="slider img"
            />
          </div>
          <div className="col-md-6 animated slideInDown text-center">
            <img
              className="slider-img"
              src="https://icms-image.slatic.net/images/ims-web/7082b8c5-df31-41a0-bdd3-9ae387c6c674.jpg"
              alt="slider img"
            />
          </div>
          <div className="col-md-6 animated slideInDown text-center">
            <img
              className="slider-img"
              src="https://icms-image.slatic.net/images/ims-web/f69ba59b-5a04-4c34-b0ca-a098036f2898.jpg"
              alt="slider img"
            />
          </div>
          <div className="col-md-6 animated slideInDown text-center">
            <img
              className="slider-img"
              src="https://icms-image.slatic.net/images/ims-web/879f966c-3fa2-457d-b0d3-779a67bae5bc.jpg"
              alt="slider img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
