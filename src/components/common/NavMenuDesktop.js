import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notification from "../../assets/images/notification.svg";
import love from "../../assets/images/love.svg";
import user from "../../assets/images/user.svg";

export default class NavMenuDesktop extends Component {
  render() {
    return (
      <div>
        <Container
          fluid={"true"}
          className="fixed-top shadow-sm p-2 m-0 bg-white"
        >
          <Row>
            <Col className="p-1" lg={3} md={3} sm={12} xs={12}>
              <Link to="/" className="btn">
                {" "}
                {/* <img
                  className="nav-logo"
                  src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"
                  alt=""
                /> */}
                <h2>Sundarban Shop</h2>
              </Link>
              <Link to="/cart" className="cart-btn">
                <i className="fa fa-shopping-cart" /> 2 items{" "}
              </Link>
            </Col>
            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <div className="input-group w-100">
                <input
                  //onChange={this.SearchOnChange}
                  name="example"
                  list="exampleList"
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <button
                  // onClick={this.SearchOnClick}
                  type="button"
                  className="btn site-btn"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </Col>
            <Col className="p-1" lg={3} md={3} sm={12} xs={12}>
              <Link to="/favourite" className="btn  nav-round-btn">
                <img src={love} alt="love" />{" "}
              </Link>
              <Link to="/notification" className="btn mx-1 nav-round-btn">
                <img src={notification} alt="notification" />
              </Link>
              <Link to="/orderlist" className="btn nav-round-btn">
                <img src={user} alt="user" />
              </Link>
              <button onClick={this.signOut} className="btn btn-light ">
                SIGN OUT
              </button>
            </Col>
          </Row>
          {/* {this.searchRedirect()}
          {this.RedirectHome()} */}
        </Container>
      </div>
    );
  }
}
