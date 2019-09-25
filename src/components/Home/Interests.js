import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel3d from "./Carousel3d";

export class Interests extends Component {
  render() {
    return (
      <>
        <Container id="interest" className="interests-section">
          <Row>
            <Col>
              <h2>INTERESTS</h2>
              <hr />
            </Col>
          </Row>
          <Carousel3d />
        </Container>
      </>
    );
  }
}

export default Interests;
