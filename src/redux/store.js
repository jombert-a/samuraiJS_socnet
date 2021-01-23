import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import mapReducer from './mapReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    mapPage: mapReducer
});
let store = createStore(reducers);
export default store;