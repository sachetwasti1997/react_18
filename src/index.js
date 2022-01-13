import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import App from './App';

import userReducer from './reducers/addUser'
import postReducer from './reducers/addPosts'

const rootReducer = combineReducers({
	users: userReducer,
	posts: postReducer
})

const store = createStore(rootReducer)

const app = (
	<Provider store={store}>
		<App/>
	</Provider>
)


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(app)
