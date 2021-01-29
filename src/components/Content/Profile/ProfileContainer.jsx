import React from 'react';
import { addPost, updateNewPost, setProfile, getProfileThunkCreator } from '../../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux'
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Profile.module.css';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.match.params.userId,this.props.userId)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { addPost, updateNewPost, setProfile, getProfileThunkCreator })(WithUrlDataContainerComponent);
