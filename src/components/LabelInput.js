import React,{useId} from "react";

export function LabelInput(props) {
	const id = useId()
	return (
		<div className="mb-3">
			<label htmlFor={id} className="form-label">{props.label}</label>
			<input id={id} className="form-control" value={props.value} readOnly />
		</div>
	);
}