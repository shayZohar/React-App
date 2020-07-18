import React, { Conponent, Component } from 'react';
import { reduxForm, Field, Fields } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';

class SurveyForm extends Component {
	//render dinamically
	renderFields() {
		return _.map(formFields, (field) => {
			return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next <i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}
// if the func return empty object, reduxform knows everything is okay and it can move on
// if error found, it will dend it to the field itself
function validate(values) {
	const errors = {};
	errors.recipients = validateEmails(values.recipients || '');
	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}
export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false, // when true, the values deleted when component is dead
})(SurveyForm);
