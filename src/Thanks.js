import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

// var name = this.visitorName;

// console.log(this.visitorName);

class Thanks extends Component {
  render() {
    return (
      <div >
        <h2>
        <span>Thanks you,</span> <br />
        Have a great day
        </h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Thanks;