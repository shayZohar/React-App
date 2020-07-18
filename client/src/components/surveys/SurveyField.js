// survey field contain logic to render a single label and text input
import React from 'react';

// the props are from reduxForm
// {...props.input} takes all eventHandlers and pass them to the tag <input> (like "onChange() and so...")
export default (props) => {
	return (
		<div>
			<label>{props.label}</label>
			<input {...props.input} style={{marginBottom:'5px'}} />
			<div className="red-text" style={{marginBottom: '20px'}}>{props.meta.touched && props.meta.error}</div>
		</div>
	);
};
