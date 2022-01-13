import {ADD_USER} from "./ActionTypes";

export const addUser = (userMap, user) => {

	userMap.set(user.id, user)

	return{
		type: ADD_USER,
		payload: userMap
	}

}