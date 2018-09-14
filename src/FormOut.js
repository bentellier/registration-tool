import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class FormOut extends Component {
  render() {
    return (
      <div>
        <p>FORM OUT TO BUILD</p>
        <button><Link to="/" className="active">Done</Link></button>
      </div>
    );
  }
}
 
export default FormOut;