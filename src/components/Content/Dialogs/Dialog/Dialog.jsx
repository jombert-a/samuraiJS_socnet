import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'
const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.avaSrc} />
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;