import { combineReducers } from 'redux';
import surveysReducer from './surveysReducer';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	surveys: surveysReducer,
});
