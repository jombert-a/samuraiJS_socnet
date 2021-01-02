import s from './Content.module.css'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

import {Route} from 'react-router-dom'

function Content() {
  return (
    <div className={s.content}>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
    </div>
  );
}

export default Content;
