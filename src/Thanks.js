import React, { Component } from "react";
import { Link } from "react-router-dom";

// var name = this.visitorName;

// console.log(this.visitorName);


class Thanks extends Component {
  // Autonatically redirect to the homepage after 5 seconds
  componentDidMount() {
  setTimeout(() => {
  this.props.history.push('/');
  }, 5000)
  }
  render() {
    return (
      <Link to="/" className="active">
      <div >
        <h2>
        <span>Thanks you,</span> <br />
        Have a great day
        </h2>
        {/*<Link to="/" className="active"><button className="btn">Homepage</button></Link>*/}
      </div>
      </Link>
    );
  }
}


export default Thanks;