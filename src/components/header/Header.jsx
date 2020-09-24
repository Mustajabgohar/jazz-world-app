import React, { Component } from "react";
import logo from "../../assets/images/logo.jpg";
import "./header.css";

class Header extends Component {
  state = {
    title_text: "Jazz World",
  };
  render() {
    return (
      <section className="container header-section">
        <div className="row">
          <div className="col-sm logo">
            <img src={logo} alt="logo" height="20px" />
          </div>
          <div className="col-sm title">
            <h1>{this.state.title_text}</h1>
          </div>
          <div className="col-sm container-flex-inner-group ">
            <div className="row">
              <div className="logo">
                <img src={logo} alt="logo" height="20px" />
              </div>
              <div className="logo">
                <img src={logo} alt="logo" height="20px" />
              </div>
              <div className="logo">
                <img src={logo} alt="logo" height="20px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
