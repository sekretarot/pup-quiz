import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Game from './components/Game'
import Question from './components/Question'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch, Redirect } from 'react-router'

class App extends Component {
  render() {
    return (
      <Switch>
      	<Route path='/questions/:number' component={Question}/>
      	<Route path='/game' component={Game}/>
        <Welcome /> 
      </Switch>
    );
  }
}

export default App;
