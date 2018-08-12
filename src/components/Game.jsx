import React, { Component } from 'react';
import '../App.css';
import { Link, Redirect } from "react-router-dom";
import Question from './Question'
import Result from './Result'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../actions/gameActions';
import PropTypes from 'prop-types';
import * as config from '../config'

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
    this.questionAnswer = this.questionAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this); 
  }

  questionAnswer = (answer) => {
    this.props.gameActions.questionAnswered(this.props.game.questions.length -1, this.currentQuestion().options.findIndex(option => option == answer));
  }

  nextQuestion = () => {
    if(this.props.game.questions.length >= config.MAX_QUESTIONS){
      this.props.gameActions.gameFinished();
    }
    else {
      this.props.gameActions.fetchQuestion();
    }
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

  isFinished() {
    return this.props.game.isFinished
  }

  renderData(item) {

    if(item != undefined){
      return <Question id={this.state.questions.length} options={item.options} correctAnswer={item.correctAnswer} answer={item.answer} answerCallback={this.questionAnswer} nextQuestionCallback={this.nextQuestion} />;
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
        }
        else if(this.isFinished()){
          return(
            <Result correctAnswersCount={this.correctAnswersCount()} />
          )
        }
        else{
            return (
                <div className="Game">
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