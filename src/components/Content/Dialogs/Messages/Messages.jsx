import { NavLink } from 'react-router-dom';
import s from './Messages.module.css'
function Messages(props) {
    let path = '/dialogs/' + props.id; 
    return (
        <div className={s.messages}>
            test message
        </div>
    );
}

export default Messages;