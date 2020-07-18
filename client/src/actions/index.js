import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () =>
	// redux-thunk watch this, and when sees that we return function, it will call this function with dispatch function as argument
	// this way we dont have to return an action immedietly
	async (dispatch) => {
		const res = await axios.get('/api/current_user');
		dispatch({ type: FETCH_USER, payload: res.data });
	};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
	console.log(values);
	const res = await axios.post('/api/surveys', values);
	history.push('/surveys'); // navigate
	dispatch({ type: FETCH_USER, payload: res.data }); //we getting back the user with new credits number(after he used some)
};

export const fetchSurveys = () => async (dispatch) => {
	const res = await axios.get('/api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
