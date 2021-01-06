import React from 'react';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreater();
        props.store.dispatch(action);
    }

    let updateNewPost = (text) => {
        let action = updateNewPostActionCreater(text);
        props.store.dispatch(action)
    }
    return <Profile updateNewPost={updateNewPost} addPost={addPost} data={state.profilePage} />
}

export default ProfileContainer;