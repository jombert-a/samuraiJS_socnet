import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData, toogleIsFetching, authMeThunkCreator } from '../../redux/authReducer';
import s from './Header.module.css';
import preloader from '../../commonImages/Spinner-1s-200px.svg';
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunkCreator();
    }
    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        data: state.profilePage,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { setAuthData, toogleIsFetching, authMeThunkCreator })(HeaderContainer)
