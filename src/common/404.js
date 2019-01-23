import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

import banana from "../images/banana.jpg";

const NotFound = () => (
  <div style={{ backgroundColor: "rgb(255, 248, 230)", textAlign: "center" }}>
    <img src={banana} alt="banana" width="500" style={{ height: "%100" }} />
    <Header size="large">Not Found Page!</Header>
    <Link to="/">Click</Link> here to return to home page.
  </div>
);

export default NotFound;
