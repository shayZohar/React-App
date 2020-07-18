// surveyNew shows surveyForm and serveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import{reduxForm} from 'redux-form'

class SurveyNew extends Component {
	/*constructor(props){
        super(props);

        this.state = {new:true};
    }*/
	// better way
	state = { showReview: false };

	renderContent() {
		if (this.state.showReview) {
			return <SurveyReview onCancel={() => this.setState({ showReview: false })} />;
		}
		return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// reduxForm make values to be cleared when pressing on cancel 
// because we dont tell the form to keep the values like in 'surveyForm' component
export default reduxForm({form: 'surveyForm'})(SurveyNew);
