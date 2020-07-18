import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = (props) => {
	const reviewFields = _.map(formFields, (field) => {
		return (
			<div key={field.name}>
				<label>{field.label}</label>
				<div>{props.formValues[field.name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button className="yellow darken-3 white-text btn-flat" onClick={props.onCancel}>
				Back
			</button>
			<button
				className="green white-text btn-flat right"
				onClick={() => props.submitSurvey(props.formValues, props.history)}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
