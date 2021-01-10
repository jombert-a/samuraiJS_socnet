import React from 'react';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () =>  dispatch(addMessageActionCreater()),
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreater(text))
    }
}
const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;