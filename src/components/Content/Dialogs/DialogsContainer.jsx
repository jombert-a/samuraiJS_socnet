import React from 'react';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
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

export default DialogsContainer;