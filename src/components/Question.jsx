import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import AdSense from 'react-adsense';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  isAnswered() {
    return this.props.answer != undefined
  }

  isAnsweredCorrectly() {
    return this.isAnswered() && this.props.correctAnswer == this.props.answer
  }

  renderAnswer() {
    return (
      <div className="Question" id={this.state.id}>
      <header className="Welcome-header">
      <img src={this.props.options.length !== 0 ? this.props.correctAnswer.image : null} className="Question-image" alt="logo" />
      <br/>
      <span className="Question-message">{this.isAnsweredCorrectly() ? "Correct!!!" : "Wrong!!!"}</span>
      <br/>
      <span className="Question-message">{this.props.correctAnswer.answer}</span>
      </header>


      <button className="button" onClick={() => this.props.nextQuestionCallback()}> Next Question </button>
      </div>
      );
  }

  renderQuestion() {
    return (
      <div className="Question" id={this.state.id}>
      <header className="Welcome-header">
      <img src={this.props.options.length !== 0 ? this.props.correctAnswer.image : null} className="Question-image" alt="logo" />
      <h1 className="Question-title">Guess the breed</h1>
      </header>

      {this.props.options.map(function (i, index) {
        return <button className="Answer-button" key={index} onClick={() => this.props.answerCallback(i)}> {i.answer} </button>
      }, this)}
      <AdSense.Google
  client='ca-pub-3321179177367577'
  slot='7806394673'
/>
      </div>
      );
  }

  render() {
    if(this.isAnswered()){
      return (this.renderAnswer());
    }
    else {
      return (this.renderQuestion());
    }
  }
}

Question.propTypes = {
  gameActions: PropTypes.object,
  game: PropTypes.object
};

function mapStateToProps(state) {
 return {
  question: state.game.questions.slice(-1).pop()
};
}

function mapDispatchToProps(dispatch) {
  return {
   gameActions: bindActionCreators(gameActions, dispatch)
 };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Question);