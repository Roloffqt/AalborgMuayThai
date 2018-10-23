import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Navbarcontainer from "./containers/navBar/index";
import HomeViewIndex from "./containers/HomeView/index";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Navbarcontainer />
        <HomeViewIndex />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
