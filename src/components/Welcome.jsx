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
          <p> Test your knowledge of dog breeds and share and compare your scores with your friends. </p>
          <p> Looking at all those photos of cute dogs is just a bonus </p>
        </header>
       <Link className="button" to={`/game`}>Start</Link>
       <p> You can also learn more about: </p>
          <h3> Tibetan Mastiff</h3>
          <img src="https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_3980.jpg" />
          <p>The Tibetan Mastiff is a large Tibetan dog breed. Originating with the nomadic cultures of Tibet, China, India, Mongolia and Nepal, it is used by local tribes of Tibetans to protect sheep from wolves, leopards, bears, large mustelids, and tigers. </p>
          <p>Life span: 12 – 15 years</p>
          <p>Weight: Male: 45–73 kg, Female: 34–54 kg</p>
          <p>Height: Male: 66–76 cm, Female: 61–71 cm</p>
          <p>Temperament: Tenacious, Stubborn, Aloof, Intelligent, Strong Willed, Protective</p>
          <p>Colors: Black, Black & Gold, Brown & Tan, Brown, Red Gold, Blue Gray</p>
          <p>Origin: Tibet, Nepal, Himalayas</p>
          <a href="https://en.wikipedia.org/wiki/Tibetan_Mastiff" target="_blank">Read More...</a>
      </div>
    );
  }
}

export default Welcome;