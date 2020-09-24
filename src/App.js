import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Infosection from "./components/personal-info-section/Infosection";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Infosection />
      <Body />
    </div>
  );
}

export default App;
