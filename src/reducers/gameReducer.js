import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF, FETCH_QUESTION, RECEIVE_QUESTION} from '../actions/actionTypes';

export default function game(state = initialState.game, action) {
  let newState;
  switch (action.type) {
    case FETCH_QUESTION:
      console.log('FETCH_QUESTION Action')
      return action;
    case RECEIVE_QUESTION:
      newState = {...state, questions: [...state.questions, action.newQuestion]};
      console.log('RECEIVE_QUESTION Action')
      return newState;
    case "QUESTION_ANSWERED":
      return Object.assign({}, state, {
      questions: state.questions.map((question, index) => {
        if (index === action.questionIndex) {
          return Object.assign({}, question, {
            answer: question.options[action.answerIndex]
          })
        }
        return question
      })})
    default:
      return state;
  }
}
