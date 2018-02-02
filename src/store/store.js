import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { consultationReducer } from './Consultation_Reducer';

const appReducer = combineReducers({
    consultationReducer
});

let store = compose(
    applyMiddleware(thunk),
)(createStore)(appReducer);

export { store };