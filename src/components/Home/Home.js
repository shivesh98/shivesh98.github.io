import React, { Component } from "react";
import Landing from "./Landing";
import Navigation from "./Navigation";
import "./Home.css";
import { Zoom } from "react-reveal";
import Particles from "react-particles-js";

export class Home extends Component {
  render() {
    return (
      <>
        <div id="home" className="layout">
          <div id="navbar">
            <Navigation />
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  size: {
                    value: 3
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    }
                  }
                }
              }}
            />
          </div>

          <h1 className="brand-name">
            <Zoom cascade>
              <div style={{ display: "inline-block" }}>SHIVESH </div>
            </Zoom>
            <Zoom cascade>
              <div style={{ display: "inline-block" }}>SHARMA</div>
            </Zoom>
          </h1>
          <h3 className="work">
            <Zoom cascade>
              <div style={{ display: "inline-block" }}>FULL-STACK </div>
            </Zoom>
            <Zoom cascade>
              <div style={{ display: "inline-block" }}>DEVELOPER</div>
            </Zoom>
          </h3>
        </div>{" "}
        <Landing />
      </>
    );
  }
}

export default Home;
