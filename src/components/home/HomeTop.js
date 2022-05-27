import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";

class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        {/* <SliderLoader isLoading={this.state.isLoading} /> */}
        <div>
          <Container className="p-0 TopSection  overflow-hidden" fluid={true}>
            <Row className="p-0 m-0">
              <Col className="p-0 m-0" lg={3} md={3} sm={12}>
                <MegaMenu />
              </Col>
              <Col className="p-0 m-0" lg={9} md={9} sm={12}>
                <HomeSlider />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;
