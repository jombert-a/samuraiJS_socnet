import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
const Dialogs = (props) => {
    let dialogsArray = props.data.dialogsData.map(el => <Dialog name={el.name} id={el.id} />);
    let messagesArray = props.data.messagesData.map(el => <Messages text={el.text} />);
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsArray}
            </div>
            <div className={s.messages}>
                {messagesArray}
            </div>
        </div>
    );
}

export default Dialogs;