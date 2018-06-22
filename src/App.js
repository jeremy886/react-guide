import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>This is a react app!</p>
        <Person name="John" job="principal" />
        <Person name="Jacob" job="builder">My hobby is racing.</Person>
        <Person name="Jobs" job="CEO" />
      </div>
    );
  }
}

export default App;
