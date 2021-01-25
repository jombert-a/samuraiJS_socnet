import {combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import mapReducer from './mapReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    mapPage: mapReducer,
    auth: authReducer
});
let store = createStore(reducers);
window.store = store;
export default store;