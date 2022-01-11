import React from "react";
import {LabelInput} from "./LabelInput";

const UserDetails = (props) => {
	const user = props.resource.user.read()
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