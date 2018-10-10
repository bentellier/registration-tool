import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

// var name = this.visitorName;

// console.log(this.visitorName);

class Thanks extends Component {
  render() {
    return (
      <div>
        <p>
        Thanks you,
        </p>
        <p>
        Have a great day
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Thanks;