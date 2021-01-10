import React from 'react';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/usersReducer';
import { connect } from 'react-redux'

let mapStateToProps = state => {
    return {
        data: state.usersPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)