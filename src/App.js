import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Navbarcontainer from './containers/navBar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbarcontainer />
      </div>
    );
  }
}
export default App;
