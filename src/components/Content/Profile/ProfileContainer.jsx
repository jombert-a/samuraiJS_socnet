import React from 'react';
import { addPost, updateNewPost, getProfileThunkCreator, setStatusThunkCreator } from '../../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux'
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Profile.module.css';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.match.params.userId, this.props.userId)
    }
    render() {
        return <>
            {this.props.data.isFetching ? <img src={preloader} alt='preloader' className={s.preloader} /> : null}
            <Profile {...this.props} />
        </>
    }
}

const mapStateToProps = state => {
    return {
        data: state.profilePage,
        userId: state.auth.id 
    }
}

export default compose(
    withAuthRedirect, 
    withRouter, 
    connect(mapStateToProps, { addPost, updateNewPost, getProfileThunkCreator, setStatusThunkCreator })
) (ProfileContainer)
