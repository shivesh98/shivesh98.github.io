import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import leo from "../images/leo.webp";
import acm from "../images/acm.webp";

export class Organization extends Component {
  render() {
    return (
      <>
        <Container id="org" className="org-section">
          <Row>
            <Col>
              <h2>ORGANIZATIONS</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <img src={leo} alt="leo-logo" />
              <h4>Director of Literature and Media & Publicity</h4>
            </Col>
            <Col sm={8}>
              <Zoom cascade>
                <p>
                  I am currently working as a Director of Literature and Media &
                  Publicity in Omega Leo Club-JUIT. I have been a part of this
                  social organization since august 2018. I am glad that I can
                  contribute to the society.
                </p>
              </Zoom>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <img src={acm} alt="acm-logo" />
              <h4>Member</h4>
            </Col>
            <Col sm={8}>
              <Zoom cascade>
                <p>
                  I have work experience as a member of ACM-JUIT student branch.
                  I have been a part of organizing committee & have organized
                  various events successfully  as well as took part in events
                  being organized in our university.
                </p>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Organization;
