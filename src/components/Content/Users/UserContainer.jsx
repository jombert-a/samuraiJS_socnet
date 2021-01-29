import React from 'react';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, getUsersThunkCreator, followThunkCreator, 
    unfollowThunkCreator } from '../../../redux/usersReducer';
import { connect } from 'react-redux'
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Users.module.css';

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.data.currentPage, this.props.data.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.data.pageSize);
    }
    render() {
        return <>
            {this.props.data.isFetching ? <img src={preloader} alt='preloader' className={s.preloader} /> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = state => {
    return {
        data: state.usersPage
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, 
    getUsersThunkCreator,
    followThunkCreator, unfollowThunkCreator })(UserContainer)