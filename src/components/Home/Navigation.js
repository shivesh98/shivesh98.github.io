import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Fragment className="navigation">
        <Navbar
          className="navbar-home justify-content-center"
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#skills">SKILLS</Nav.Link>
              <Nav.Link href="#org">ORGANIZATIONS</Nav.Link>
              <Nav.Link href="#interest">INTERESTS</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#achievements">ACHIEVEMENTS</Nav.Link>
              <Nav.Link href="#myFooter">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
