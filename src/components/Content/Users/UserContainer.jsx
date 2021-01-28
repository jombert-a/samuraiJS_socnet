import React from 'react';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, toogleIsFetching, toogleFollowingProcess } from '../../../redux/usersReducer';
import { connect } from 'react-redux'
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Users.module.css';
import { getUsers } from '../../../api/api';

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        getUsers(this.props.data.pageNumber, this.props.data.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toogleIsFetching(false);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.data.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toogleIsFetching(false);
            });
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
    { follow, unfollow, setUsers, setCurrentPage, toogleIsFetching, toogleFollowingProcess })(UserContainer)