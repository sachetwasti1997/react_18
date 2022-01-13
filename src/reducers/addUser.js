import {ADD_USER} from "../actions/ActionTypes";

const initialState = {
	userMap: new Map()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
	  case ADD_USER:
		  return{
			  ...state,
			  userMap: action.payload
		  }
	  default:
		  return state
  }
}

export default reducer