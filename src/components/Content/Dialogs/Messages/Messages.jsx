import s from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={`${s.messages} ${props.data.pull === 'right' ? s.right : ''}`}>
            <img src={props.data.avaSrc} alt='ava' />
            {props.data.text}
        </div>
    );
}

export default Messages;