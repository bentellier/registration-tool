import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, <br />Welcome <br />to Feed</h1>       
       <button><Link to="/FormIn" className="active">Sign In</Link></button>
       <button><Link to="/FormOut" className="active">Sign Out</Link></button>
      </div>
    );
  }
}
 
export default Home;