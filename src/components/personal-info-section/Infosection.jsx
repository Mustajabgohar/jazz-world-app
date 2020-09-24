import React, { Component } from "react";

import "./infosection.css";
import dp from "../../assets/images/logo.jpg";

class Infosection extends Component {
  state = {
    credit: 222,
    account_handle: "Mustajab",
    cell_number: "03243290359",
  };
  render() {
    return (
      <section className="container info-section">
        <div className="row">
          <div className="col-sm balance-section">
            <p>Your balance is</p>
            <div className="credit-amount">
              <div className="row">
                <span>Rs</span>
                <h1>{this.state.credit}</h1>
                <div className="round-info-circle">
                  <span>i</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm name-section">
            <div className="row">
              <div className="display-pic">
                <img src={dp} alt="display picture" />
              </div>
              <div className="name-number">
                <p>{this.state.account_handle}</p>
                <p>{this.state.cell_number}</p>
              </div>
              <div className="account-add-btn">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className={
              this.state.credit > 15
                ? "tap-section credit-normal"
                : "tap-section credit-low"
            }
          >
            <p>TAP TO RECHARGE</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Infosection;
