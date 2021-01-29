import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import mapReducer from './mapReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    mapPage: mapReducer,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;