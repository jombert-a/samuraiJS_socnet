import s from './Content.module.css'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

import { Route } from 'react-router-dom'

const Content = (props) => {
  return (
    <div className={s.content}>
      <Route path='/profile' render={() => <Profile data={props.data.postsData} />} />
      <Route path='/dialogs' render={() => <Dialogs data={props.data} />} />
    </div>
  );
}

export default Content;
