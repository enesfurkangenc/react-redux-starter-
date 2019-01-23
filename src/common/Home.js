import React, { Component } from "react";
import { connect } from "react-redux";

import image from "../images/monkey.png";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} alt="logo" width="160" />
          <div style={{ marginTop: "35px" }}>
            React --> React-Router Redux Starter Kit Enes Genc.
          </div>
          <div style={{ marginTop: "10px" }}>
            Starter Props --> {this.props.inc}{" "}
          </div>
        </header>
      </div>
    );
  }
}

const mapPropsToState = ({ inc }) => {
  return {
    inc
  };
};

export default connect(mapPropsToState)(App);
