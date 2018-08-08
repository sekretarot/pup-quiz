import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      error: null,
      isLoaded: false,
      options: props.options || [],
      correctAnswer: props.correctAnswer || null,
      answerCallback: props.answerCallback
    };
  }

  // getAnswerObject() {
  //   console.log("in getAnswerObject")
  //   console.log(this.state.items[this.state.answerIndex])
  //   return this.state.items[this.state.answerIndex].image;
  // }

  render() {
    return (
      <div className="Question" id={this.state.id}>
        <header className="Welcome-header">
          <img src={this.state.options.length !== 0 ? this.state.correctAnswer.image : null} className="" alt="logo" />
          <h1 className="App-title">Guess the breed</h1>
        </header>
        
        {this.state.options.map(function (i, index) {
          return <button key={index} onClick={() => this.state.answerCallback(i)}> {i.answer} </button>
      }, this)}
      </div>
    );
  }
}



export default Question;