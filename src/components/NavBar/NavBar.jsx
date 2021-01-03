import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

const NavBar = (props) => {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={s.active}>1. Main</NavLink>
              </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={s.active}>2. Dialogs</NavLink>
              </li>
            </ul>
        </div>
    );
}

export default NavBar;
