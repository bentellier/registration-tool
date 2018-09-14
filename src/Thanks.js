import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class Thanks extends Component {
  render() {
    return (
      <div>
        <p>
        Thanks, %%NAME_TO_PULL_FROM_DB%%
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