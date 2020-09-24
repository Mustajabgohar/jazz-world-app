import React, { Component } from "react";
import "./body.css";
import Package from "../package-info-section/Package";
import Adverts from "../advert-slider/Adverts";
import Services from "../services-section/Services";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="body-section">
        <Package />
        <Adverts />
        <Services />
      </div>
    );
  }
}

export default Body;
