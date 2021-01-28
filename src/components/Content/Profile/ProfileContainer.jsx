import React from 'react';
import { addPost, updateNewPost, setProfile, toogleIsFetching } from '../../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux'
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Profile.module.css';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userId;
        getProfile(userId)
            .then(data => {
                this.props.setProfile(data);
                this.props.toogleIsFetching(false);
            });
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

export default connect(mapStateToProps, { addPost, updateNewPost, setProfile, toogleIsFetching })(WithUrlDataContainerComponent);
