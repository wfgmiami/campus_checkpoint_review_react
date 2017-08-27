const mammals = ['Tiger', 'Panda', 'Pig'];
const birds = ['Eagle', 'Flamingo', 'Penguin'];
const fish = [ 'Seahorse', 'Octopus', 'Stingray'];

const initialState = {
        selectedMammal : "Tiger",
        selectedBird : "Eagle",
        selectedFish : "Seahorse",
        mammals,
        birds,
        fish
        }

import { setMammal, setBird, setFish } from '../action-creators/actions';

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {
	switch(action.type){
		case 'SET_BIRD':
			state = Object.assign({}, state, {selectedBird: action.animal }); break;
		case 'SET_MAMMAL':
			state = Object.assign({}, state, { selectedMammal: action.animal }); break;
		case 'SET_FISH':
			state = Object.assign({}, state, { selectedFish: action.animal }); break;
		default:
			state;
	}

	return state;
}
