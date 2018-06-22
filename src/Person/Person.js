import React from 'react';


const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I'm a {props.job}. {props.children}</p>
      <p>I drew the number {Math.floor(Math.random()*100)}!</p>
    </div>
  )
};

export default person;
