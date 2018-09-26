import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Navbarcontainer from "./containers/navBar/index";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Navbarcontainer />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
