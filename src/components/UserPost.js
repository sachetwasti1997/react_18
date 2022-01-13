import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../actions/addPost";

const UserPosts = (props) => {
	const dispatch = useDispatch()
	const postMap = useSelector(state => state.posts.postMap)
	let post = postMap.get(props.userId)
	if (post == null){
		post = props.resource.userPosts.read()
		dispatch(addPost(postMap, post))
	}
	/**
	 * const dispatch = useDispatch()
	 * 	const userMap = useSelector(state => state.users.userMap)
	 * 	let user = userMap.get(props.userId)
	 * 	if(user == null){
	 * 		user = props.resource.user.read()
	 * 		dispatch(addUser(userMap, user))
	 * 	}
	 * 	console.log(user)
	 */
	return(
		<div>
			<ul className={'list-group'}>
				{
					post?.map(post => (
						<div key={post.id} className="card card-body my-3">
							<h5 className="card-title">{post.title}</h5>
							<p className="card-text">{post.body}</p>
						</div>
					))
				}
			</ul>
		</div>
	)
}
export default UserPosts