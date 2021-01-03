import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
let dialogsData = [
    { name: 'Me', id: 1 },
    { name: 'Mother', id: 2 },
    { name: 'Father', id: 3 },
    { name: 'Brother', id: 4 },
]
let dialogsArray = dialogsData.map(el => <Dialog name={el.name} id={el.id} />);
let messagesData = [
    { id: 1, text: 'test'},
    { id: 2, text: 'testing'},
    { id: 3, text: 'tests'}
]
let messagesArray = messagesData.map(el => <Messages text={el.text} />);
const Dialogs = (props) => {
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