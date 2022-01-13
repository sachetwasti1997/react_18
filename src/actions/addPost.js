import {ADD_POSTS_FOR_USERS} from "./ActionTypes";

export const addPost = (postMap, post) => {

	postMap.set(post[0].userId, post)

	return{
		type: ADD_POSTS_FOR_USERS,
		payload: postMap
	}

}