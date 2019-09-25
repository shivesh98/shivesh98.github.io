import React, { Component } from "react";
import "./Footer-with-map.css";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Interests from "./Interests";
import Organization from "./Organization";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

export class Landing extends Component {
  render() {
    return (
      <>
        <About />

        <Skills />

        <Organization />

        <Interests />

        <Projects />

        <Achievements />

        <Footer />
      </>
    );
  }
}

export default Landing;
