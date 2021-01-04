import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import React from 'react';
const Dialogs = (props) => {
    let dialogsArray = props.data.dialogsData.map(el => <Dialog name={el.name} id={el.id} avaSrc={el.avaSrc} />);
    let messagesArray = props.data.messagesData.map(el => <Messages data={el} />);
    let newMessageArea = React.createRef();

    let addMessage = () => {
        let text = newMessageArea.current.value;
        props.func(text);
    }
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
                <div className={s.addmessage}>
                    <textarea ref={newMessageArea}></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;