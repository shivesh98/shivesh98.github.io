import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Achievements extends Component {
  render() {
    return (
      <>
        <Container id="achievements" className="achievements">
          <Row>
            <Col>
              <h2>ACHIEVEMENTS</h2>

              <hr />
            </Col>
          </Row>
          <Row id="content1">
            <Col xs={6}>
              <div id="list">
                <h3>R&D EXPO 2019, JUIT</h3>
                <h4>2nd Runner Up</h4>
              </div>

              <div id="list">
                <h3>e-YANTRA 2018</h3>
                <h4>Cleared 3 Rounds</h4>
              </div>
            </Col>
            <Col xs={6}>
              <div id="list">
                <h3>ACM-ICPC, 2018</h3>
                <h4>Participant</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Achievements;
