import React, { Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export class Skills extends Component {
  render() {
    return (
      <>
        <Container id="skills" className="skill-section">
          <Row>
            <Col>
              <h2>SKILLS</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div id="skills-set">
                <h4>HTML</h4>
                <ProgressBar animated now={90} />
              </div>

              <div id="skills-set">
                <h4>CSS</h4>
                <ProgressBar animated now={80} />
              </div>

              <div id="skills-set">
                <h4>BOOTSTRAP</h4>
                <ProgressBar animated now={83} />
              </div>

              <div id="skills-set">
                <h4>REACT</h4>
                <ProgressBar animated now={45} />
              </div>

              <div id="skills-set">
                <h4>ADOBE PHOTOSHOP</h4>
                <ProgressBar animated now={60} />
              </div>
            </Col>
            <Col xs={6}>
              <div id="skills-set">
                <h4>PYTHON</h4>
                <ProgressBar animated now={70} />
              </div>

              <div id="skills-set">
                <h4>FLASK</h4>
                <ProgressBar animated now={55} />
              </div>

              <div id="skills-set">
                <h4>DJANGO</h4>
                <ProgressBar animated now={40} />
              </div>

              <div id="skills-set">
                <h4>WORDPRESS</h4>
                <ProgressBar animated now={60} />
              </div>

              <div id="skills-set">
                <h4>ADOBE ILLUSTRATOR</h4>
                <ProgressBar animated now={35} />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Skills;
