import {ADD_POSTS_FOR_USERS} from "../actions/ActionTypes";

const initialState = {
	postMap: new Map()
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POSTS_FOR_USERS:
			return{
				...state,
				postMap: action.payload
			}
		default:
			return state
	}
}

export default reducer