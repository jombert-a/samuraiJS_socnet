import React from 'react';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreater();
        props.store.dispatch(action);
    }

    let updateNewMessage = (text) => {
        let action = updateNewMessageActionCreater(text);
        props.store.dispatch(action)
    }

    return <Dialogs data={state.dialogsPage} addMessage={addMessage} updateNewMessage={updateNewMessage} />
}

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