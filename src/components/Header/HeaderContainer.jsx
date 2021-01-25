import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData, toogleIsFetching } from '../../redux/authReducer';
import s from './Header.module.css';
import preloader from '../../commonImages/Spinner-1s-200px.svg';
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
                this.props.toogleIsFetching(false);
            });
    }
    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
}
export default connect(mapStateToProps, { setAuthData, toogleIsFetching })(HeaderContainer)
