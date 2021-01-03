import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
function Dialogs() {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <Dialog name='Me' id='0' />
                <Dialog name='Mother' id='1' />
                <Dialog name='Father' id='2' />
                <Dialog name='Brother' id='3' />
            </div>
            <div className={s.messages}>
                <Messages />
            </div>
        </div>
    );
}

export default Dialogs;