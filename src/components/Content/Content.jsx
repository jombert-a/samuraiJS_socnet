import s from './Content.module.css'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'

function Content() {
  return (
    <BrowserRouter>
      <div className={s.content}>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
      </div>
    </BrowserRouter>
  );
}

export default Content;
