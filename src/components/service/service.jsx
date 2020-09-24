import React, { Component } from "react";
import "./service.css";

class Service extends Component {
  state = {
    arr1: this.props.value,
  };
  render() {
    return (
      <div className="col-lg-3 col-md-3">
        <div className="service">
          <img src={this.state.arr1[0]} alt="text" />
          <p>{this.state.arr1[1]}</p>
          {this.state.arr1[1] === "Games" ? <p>{this.state.arr1[2]}</p> : null}
        </div>
      </div>
    );
  }
}

export default Service;
