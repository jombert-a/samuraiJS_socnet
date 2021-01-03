import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'
function Dialog(props) {
    let path = '/dialogs/' + props.id; 
    return (
        <div className={s.dialog}>
            <div>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;