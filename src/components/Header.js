import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <h3>
          <p>
            Click on Search filter to find employees by there Name,Phone,Email
            or DOB narrow your results.
          </p>
        </h3>
      </div>
    );
  }
}
