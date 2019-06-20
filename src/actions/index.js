export const INCREMENT = 'INCREMENT'; // Action Type
export const DECREMENT = 'DECREMENT'; // Action Type

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

//Action Creator
export const increment = () => {
  //Action
  console.log('increment action called');
  return {
    type: INCREMENT,
  }
};

//Action Creator
export const decrement = () => {
  //Action
  console.log('decrement action called')
  return {
    type: DECREMENT,
  }
};
