import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import profile from "../images/profile.webp";

export class About extends Component {
  render() {
    return (
      <>
        <Container id="about" className="about-section">
          <Row>
            <Col>
              <h2>ABOUT</h2>
              <hr />
            </Col>
          </Row>
          <Row className="about-content">
            <Col sm={3}>
              <img src={profile} alt="profile" />
            </Col>
            <Col sm={9}>
              <Zoom cascade>
                <p>
                  I am a full-stack developer, currently pursuing B.Tech. in
                  Computer Science & Engineering at  Jaypee University of
                  Information Technology. I am interested in graphic designing.
                  I can assist with producing clean and functional design where
                  required. I love listening music and like to play
                  table-tennis.
                </p>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
