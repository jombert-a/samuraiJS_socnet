import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData, toogleIsFetching, authMeThunkCreator } from '../../redux/authReducer';
import s from './Header.module.css';


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
