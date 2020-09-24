import React, { Component } from "react";
import "./services.css";
import Service from "../service/service";
import logo1 from "../../assets/images/logo.jpg";
import logo2 from "../../assets/images/logo.jpg";
import logo3 from "../../assets/images/logo.jpg";
import logo4 from "../../assets/images/logo.jpg";
import logo5 from "../../assets/images/logo.jpg";
import logo6 from "../../assets/images/logo.jpg";
import logo7 from "../../assets/images/logo.jpg";
import logo8 from "../../assets/images/logo.jpg";

class Services extends Component {
  state = {
    islam: [logo1, "Islam"],
    rewards: [logo2, "Daily Rewards"],
    history: [logo3, "View History"],
    packages: [logo4, "Packages"],
    games: [logo5, "Games", "Data Charges Apply"],
    discounts: [logo6, "Discounts"],
    more_services: [logo7, "More Services"],
    support: [logo8, "Support"],
  };
  render() {
    return (
      <section className="services-section">
        <div className="container ">
          <div className="row">
            <Service className="clickable" value={this.state.islam} />
            <Service className="clickable" value={this.state.rewards} />
            <Service className="clickable" value={this.state.history} />
            <Service className="clickable" value={this.state.packages} />
            <Service className="clickable" value={this.state.games} />
            <Service className="clickable" value={this.state.discounts} />
            <Service className="clickable" value={this.state.more_services} />
            <Service className="clickable" value={this.state.support} />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
