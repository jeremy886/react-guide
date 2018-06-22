import React from 'react';

import './Person.css';


const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I'm a {props.job}. {props.children}</p>
      <p>I drew the number {Math.floor(Math.random()*100)}!</p>

      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
