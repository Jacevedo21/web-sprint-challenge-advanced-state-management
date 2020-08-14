import React, { Component } from "react";
import Container from './Card/Container'
import Form from './Form'
import "./App.css";

import styled from 'styled-components'

const AppContainer = styled.div`
text-align: center;
padding: 5%;
`

class App extends Component {

  render() {
    return (
      <AppContainer>
        <h2>Your Smurfs!</h2>
        <Form />
        <Container />
      </AppContainer>
    );
  }
}

export default App;
