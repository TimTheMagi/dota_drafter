import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Landing = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div>
      <h2>Landing</h2>
    </div>
  </div>
);

const Draft = () => (
  <div>
    <h2>Draft</h2>
  </div>
);

const StandinNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/draft">Draft</Link>
        </li>
      </ul>
    </nav>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StandinNav />
          <Route exact path="/" component={Landing} />
          <Route path="/draft" component={Draft} />
        </div>
      </Router>
    );
  }
}

export default App;
