import React, { Component } from "react";
import Container from './Card/Container'
import Form from './Form'


import "./App.css";
class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Your Smurfs!</h2>
        <Form />
        <Container />
      </div>
    );
  }
}

export default App;
