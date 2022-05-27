import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export class NewArrival extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div>
          <Container className="text-center BetweenTwoSection" fluid={true}>
            <h4 className="section-title">
              NEW ARRIVAL
              {/* <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left" />
              </a>
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right" />
              </a> */}
            </h4>
            <h6 className="section-sub-title">
              Some Of Our Exclusive Collection, You May Like
            </h6>
            <Slider {...settings}>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/4a84438b37a4643c2106c0b19d42f0e8.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/84e880293fd678f90e0f20b9d9b1604f.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/4a84438b37a4643c2106c0b19d42f0e8.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/4a84438b37a4643c2106c0b19d42f0e8.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/4a84438b37a4643c2106c0b19d42f0e8.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/4a84438b37a4643c2106c0b19d42f0e8.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/mdc/2f3330bcb276dca1ca057451d58274b3.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              <div className="p-1">
                <Link to="/">
                  <Card className="card   text-center w-100  image-box ">
                    <img
                      src="https://static-01.daraz.com.bd/p/1d29b2d7ab529935106c2095a64f2bc0.jpg_400x400q75-product.jpg_.webp"
                      alt=""
                    />
                    <Card.Body>
                      <h5 className="product-name-on-card">
                        Black e-Quick Stylish Cap for Men
                      </h5>
                      <p className="product-price-on-card">Price: 400 TK</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </Slider>
          </Container>
        </div>
      </>
    );
  }
}

export default NewArrival;
