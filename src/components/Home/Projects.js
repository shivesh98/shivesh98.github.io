import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import pcp from "../images/pcp.webp";

export class Projects extends Component {
  render() {
    return (
      <>
        <Container id="projects" className="projects-section">
          <Row>
            <Col>
              <h2>PROJECTS</h2>

              <hr />
            </Col>
          </Row>
          <Row id="content1">
            <Col sm={4}>
              <Fade left>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={pcp} />
                  <Card.Body>
                    <Card.Title>Primary Care Psychiatrist</Card.Title>
                    <Card.Text></Card.Text>
                    <a
                      href="https://github.com/shivesh98/Primary-Care-Psychiatrist"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button variant="primary">Github</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col sm={8}>
              <Fade right>
                <p>
                  As the number of cases of suicides due to depression are
                  increasing day by day, so to fight this we have developed a
                  platform which will help the psychiatrist to diagnose the
                  issue and help their patient in the best way. Depression is
                  one of the major issues everyone is facing nowadays and also
                  fighting with depression in this busy lifestyle is not an easy
                  task, neither for that person nor for the psychiatrist to cure
                  the patient without knowing the root cause of the problem,
                  even just by visiting doctor's clinic for few days won't make
                  much difference. Our software as a service product helps the
                  psychiatrist and patient on a daily basis with no need to
                  visit the clinic again and again , the patient just has to
                  write his daily routine on an online blog which would be
                  converted to a graph using natural language processing and a
                  doctor can easily read that graph and can catch the issue
                  going on with its patients and can treat them accordingly.
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Projects;
