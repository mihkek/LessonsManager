// Код файла store.js
import { createStore } from 'redux';
import * as reducers from './src/reducers'
import { combineReducers } from 'redux';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;