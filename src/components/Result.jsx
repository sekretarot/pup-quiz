import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import * as config from '../config'
import Social from './Social'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  render() {
    return (
      <div className="Result">
        <header className="Result-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> You've got {this.props.correctAnswersCount}/{config.MAX_QUESTIONS} </h2>
        </header>
        <Social shareMessage={`I've got ${this.props.correctAnswersCount}/${config.MAX_QUESTIONS} answers`}/>
      </div>
    );
  }
}

export default Result;