import React from 'react';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        data: state.profilePage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: () =>  dispatch(addPostActionCreater()),
        updateNewPost: (text) => dispatch(updateNewPostActionCreater(text))
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);
export default ProfileContainer;