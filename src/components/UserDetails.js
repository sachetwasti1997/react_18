import React from "react";
import {LabelInput} from "./LabelInput";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../actions/addUser";

const UserDetails = (props) => {
	const dispatch = useDispatch()
	const userMap = useSelector(state => state.users.userMap)
	let user = userMap.get(props.userId)
	if(user == null){
		user = props.resource.user.read()
		dispatch(addUser(userMap, user))
	}
	return(
		<div className={'card card-body my-3'}>
			<h2 className={'large text-primary'}>{user.username}</h2>
			<LabelInput label={"Username"} value={user.username}/>
			<LabelInput label={"Email"} value={user.email}/>
			<LabelInput label={"City"} value={user.address.city}/>
		</div>
	)
}

export default UserDetails