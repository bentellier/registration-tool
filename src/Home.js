import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1><span>Hello,</span> <br />Welcome <br />to Feed</h1>       
       <Link to="/FormIn" className="active"><button className="btn">Sign In</button></Link>
       {/*<button><Link to="/FormOut" className="active">Sign Out</Link></button>*/}
      </div>
    );
  }
}
 
export default Home;