import {combineReducers} from 'redux';
import reducers from './reducers';

export default combineReducers({ messages: reducers}); 
//es6: {reducers} => es5: {reducers: reducers} cặp key-value