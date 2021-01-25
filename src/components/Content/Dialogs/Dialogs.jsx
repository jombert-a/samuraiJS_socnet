import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import React from 'react';
const Dialogs = (props) => {
    let dialogsArray = props.data.dialogsData.map(el => 
        <Dialog name={el.name} id={el.id} avaSrc={el.avaSrc} />);

    let messagesArray = props.data.messagesData.map(el => <Messages data={el} />);

    let newMessageArea = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateNewMessage = () => {
        let text = newMessageArea.current.value;
        props.updateNewMessage(text);
    }
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
                <div className={s.addmessage}>
                    <textarea onChange={updateNewMessage} 
                        ref={newMessageArea} 
                        value={props.data.newMessageText}>
                    </textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;