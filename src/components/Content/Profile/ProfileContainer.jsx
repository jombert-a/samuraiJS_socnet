import React from 'react';
import { addPost, updateNewPost } from '../../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Profile data={this.props} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.profilePage
    }
}

export default connect(mapStateToProps, {addPost, updateNewPost}) (ProfileContainer);
