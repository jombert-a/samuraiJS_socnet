import s from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={s.messages}>
            {props.text}
        </div>
    );
}

export default Messages;