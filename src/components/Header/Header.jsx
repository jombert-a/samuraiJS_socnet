import s from './Header.module.css'
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__left}>
        <img src={logo} className={s.logo} alt="logo" />
        <p>Travel-Social-net-on-React</p>
      </div>
      <div className={s.header__right}>
        <NavLink to='/login'>
          Login
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
