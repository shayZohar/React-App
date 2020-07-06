import  "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//creating redux store to store all actions
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Provider is a react component that reads changes from redux store and change the states with the new state
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);