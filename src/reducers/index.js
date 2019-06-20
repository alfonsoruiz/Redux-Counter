import { INCREMENT, DECREMENT } from '../actions';  //Importing action types from from action files

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?


//Redux calls reducer when app first initializes and the value of state (which is the current representation of the store) will be undefined initially.
// InitialState is set as the value of state incase state is ever undefined
//Actions represent action functions and a switch statements checks action types to determine which action to runttt
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count += 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count -= 1
      }
    default:
      return state;
  }
};
