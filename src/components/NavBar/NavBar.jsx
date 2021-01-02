import s from './NavBar.module.css'

function NavBar() {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    1. Main
              </li>
                <li>
                    2. About
              </li>
            </ul>
        </div>
    );
}

export default NavBar;
