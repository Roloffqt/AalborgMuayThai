import React, { Component } from "react";
import "./App.css";
import Navbarcontainer from "./containers/navBar/index";
import HomeViewIndex from "./containers/HomeView/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbarcontainer />
        <HomeViewIndex />
        hey
      </div>
    );
  }
}

export default App;
