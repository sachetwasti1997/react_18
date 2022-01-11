import React from "react";

const UserPosts = (props) => {
	const post = props.resource.userPosts.read()
	return(
		<div>
			<ul className={'list-group'}>
				{
					post.map(post => (
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