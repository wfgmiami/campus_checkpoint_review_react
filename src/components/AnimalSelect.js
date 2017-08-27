import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?

export default function AnimalSelect (props) {

  return (
    <form>
        <label>Select an Animal: </label>
        <select onChange={(ev)=>props.submitAnimal(ev.target.value)}>
        { props.animals.map(animal => {
            return <option key={animal}>{ animal } </option>
          })
        }
        </select>
    </form>
  )

};

