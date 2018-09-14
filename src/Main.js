import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import FormIn from "./FormIn";
import FormOut from "./FormOut";
import Terms from "./Terms";
import Thanks from "./Thanks";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Link to="/"><img src={require('./images/NewFeedLogo.png')} alt="Feed Logo" width="19" height="19"/></Link>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/formin" component={FormIn}/>
            <Route path="/formout" component={FormOut}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/thanks" component={Thanks}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;