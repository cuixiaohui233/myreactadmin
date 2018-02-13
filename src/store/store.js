import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { consultationReducer } from './Consultation_Reducer';
import { imageReducer } from './Image_Reducer';

const appReducer = combineReducers({
    consultationReducer,
    imageReducer
});



const persistConfig = {
    key:'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, appReducer);

let store = compose(
    applyMiddleware(thunk),
)(createStore)(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };