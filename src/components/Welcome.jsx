import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.png';
import '../App.css';
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <header className="Welcome-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pup Quiz</h1>
        </header>
       <Link className="button" to={`/game`}>Start</Link>
      </div>
    );
  }
}

export default Welcome;