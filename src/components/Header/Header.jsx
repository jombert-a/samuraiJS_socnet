import s from './Header.module.css'
import logo from '../../logo.svg';
const Header = (props) => {
  return (
    <div className={s.header}>
      <img src={logo} className={s.logo} alt="logo" />
      <p>Travel-Social-net-on-React</p>
    </div>
  );
}
export default Header;
