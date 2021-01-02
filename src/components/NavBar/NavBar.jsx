import s from './NavBar.module.css'

function NavBar() {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    <a href='/profile'>main</a>
              </li>
                <li>
                   <a href='/dialogs'>dialogs</a>
              </li>
            </ul>
        </div>
    );
}

export default NavBar;
