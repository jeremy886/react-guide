import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "John", job: "principal"},
      {name: "Jacob", job: "builder"},
      {name: "Jobs", job: "CEO"}
    ]
  }

  switchNameHandler = () => {
    console.log("was clicked")
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>This is a react app!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} job={this.state.persons[0].job} />
        <Person name={this.state.persons[1].name} job={this.state.persons[1].job}>
          My hobby is racing.</Person>
        <Person name={this.state.persons[0].name} job={this.state.persons[2].job} />
      </div>
    );
  }
}

export default App;
