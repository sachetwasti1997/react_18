import React from "react";

export const ErrorBoundaryComponent = (props) => {
	console.log(props)
  return(
	  <div
	  	className={'alert alert-danger m-auto'}
		role={'alert'}
	  >
		  <h4 className={'alert-heading'}>
			  Something went wrong
		  </h4>
		  <hr/>
		  {props.error.message}
	  </div>
  )
}
