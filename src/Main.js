import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import FormIn from "./FormIn";
import Terms from "./Terms";
import Thanks from "./Thanks";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Link to="/"><img src={require('./images/NewFeedLogo_3.png')} alt="Feed Logo" width="27" height="27"/></Link>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/formin" component={FormIn}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/thanks" component={Thanks}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;