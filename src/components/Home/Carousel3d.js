import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Carousel3d extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500
    };
    return (
      <Slider {...settings}>
        <div className="int-list">
          <h3>WATCHING STAND UP COMEDY</h3>
        </div>
        <div className="int-list">
          <h3>LISTENING MUSIC</h3>
        </div>
        <div className="int-list">
          <h3>WATCHING WEB SERIES</h3>
        </div>
        <div className="int-list">
          <h3>WATCHING MOVIES</h3>
        </div>
        <div className="int-list">
          <h3>COMPUTER GAMING</h3>
        </div>
        <div className="int-list">
          <h3>CRICKET</h3>
        </div>
        <div className="int-list">
          <h3>TABLE-TENNIS</h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel3d;
