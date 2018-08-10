import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link, Redirect } from "react-router-dom";
import Question from './Question'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';

class Game extends Component {

  componentWillMount() {
    this.props.gameActions.fetchQuestion();
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      questions: props.questions || []
    };
    this.questionAnswer = this.questionAnswer.bind(this) 
  }

  questionAnswer = (answer) => {
    this.props.gameActions.questionAnswered(this.props.game.questions.length -1, this.currentQuestion().options.findIndex(option => option == answer));
  }

  currentQuestion() {
    return this.props.game.questions.slice(-1).pop()
  }

  correctAnswersCount() {
    let correctAnswers = 0;
    this.props.game.questions.forEach(
      function(question) {
        if(question.correctAnswer == question.answer){
          correctAnswers++;
        }
      })
    return correctAnswers
  }

  answeredQuestionsCount() {
    return this.props.game.questions.filter(question => question.answer).length
  }

  renderData(item) {
    if(this.currentQuestion() && this.currentQuestion().answer !== undefined){
      this.props.gameActions.fetchQuestion();
      return null;
    }

    if(item != undefined){
      return <Question id={this.state.questions.length} options={item.options} correctAnswer={item.correctAnswer} answerCallback={this.questionAnswer} />;
    }
    else{
      return null;
    }
  }

  render() {
        if(!this.props.game && this.props.game.questions.indexOf() == -1){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="a">
                    <p>Correct: {this.correctAnswersCount()}/{this.answeredQuestionsCount()}</p>
                    {
                      this.renderData(this.currentQuestion())
                    }
                </div>
            )
        }
    }
}

Game.propTypes = {
    gameActions: PropTypes.object,
    game: PropTypes.object
};

function mapStateToProps(state) {
    return {
        game: state.game
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
)(Game);

// export default Game;