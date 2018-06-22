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
  };

  switchNameHandler = (new_name) => {
      this.setState(
        {
          persons: [
            {name: new_name, job: "principal"},
            {name: "Jenny", job: "builder"},
            {name: "Joan", job: "CEO"}
          ]
        }
      );
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>This is a react app!</p>
        <button onClick={()=>this.switchNameHandler('Josh')}>Switch Names</button>
        <Person
          click={this.switchNameHandler.bind(this, 'Joy')}
          name={this.state.persons[0].name} job={this.state.persons[0].job} />
        <Person name={this.state.persons[1].name} job={this.state.persons[1].job}>
          My hobby is racing.</Person>
        <Person name={this.state.persons[2].name} job={this.state.persons[2].job} />
      </div>
    );
  }
}

export default App;
