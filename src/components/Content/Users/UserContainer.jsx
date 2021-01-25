import React from 'react';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, toogleIsFetching } from '../../../redux/usersReducer';
import { connect } from 'react-redux'
import * as axios from 'axios';
import preloader from '../../../commonImages/Spinner-1s-200px.svg';
import s from './Users.module.css';

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.data.currentPage}&count=${this.props.data.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toogleIsFetching(false); 
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.data.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toogleIsFetching(false);
            });
        
    }
    render() {
        return <>
            {this.props.data.isFetching ? <img src={preloader} alt='preloader' className={s.preloader}/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = state => {
    return {
        data: state.usersPage
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, toogleIsFetching })(UserContainer)