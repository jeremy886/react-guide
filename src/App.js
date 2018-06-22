import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 0, name: "John", job: "principal"},
      {id: 1, name: "Jacob", job: "builder"},
      {id: 2, name: "Jobs", job: "CEO"}
    ],
    show_persons: false
  };

  deletePersonHandler = (person_index) => {
    // const persons = this.state.persons.slice(); // copy an array by value
    const persons = [...this.state.persons];  // copy an array by value
    persons.splice(person_index, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'James', job: 'student'},
        {name: event.target.value, job: 'farmer'},
        {name: 'Jack', job: 'plumber'}
      ]
    })
  };

  togglePersonHandler = () => {
    const show_status = this.state.show_persons;
    this.setState({show_persons: !show_status})
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.show_persons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              job={person.job}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">

        <h1>Welcome to React</h1>
        <p>This is a react app!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Show Names
        </button>
        {persons}
      </div>
    );
  }

}

export default App;
