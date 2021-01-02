import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

function NavBar() {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    <NavLink to='/profile'>1. Main</NavLink>
              </li>
                <li>
                    <NavLink to='/dialogs'>2. Dialogs</NavLink>
              </li>
            </ul>
        </div>
    );
}

export default NavBar;
