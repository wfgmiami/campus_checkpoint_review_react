
import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  // constructor(props) {
  //   super();
  //   this.state = {selectedAnimal: props.selectedAnimal}
  //   this.setAnimal = this.setAnimal.bind(this);
  // }

constructor({selectedAnimal}){
  super();
  this.state = {selectedAnimal}
  this.setAnimal = this.setAnimal.bind(this);
}


  // setAnimal(newAnimal){
  //   this.setState({ selectedAnimal: newAnimal })
  // }

  setAnimal(selectedAnimal){
    this.setState({ selectedAnimal })
  }

  render () {

    return (
	    <div className="exhibit">
        {/*<AnimalSelect submitAnimal = {this.setAnimal} selectedAnimal = {this.props.selectedAnimal} animals={this.props.animals} />
        <Cage selectedAnimal = { this.props.selectedAnimal } animals={this.props.animals}/>*/}

        <AnimalSelect submitAnimal = {this.setAnimal} animals = {this.props.animals } />
	   <Cage selectedAnimal={ this.state.selectedAnimal } />
      </div>


  	)
  }
};
