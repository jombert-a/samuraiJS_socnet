import s from './Content.module.css'
import { Route } from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import DialogsContainer from './Dialogs/DialogsContainer'
import UserContainer from './Users/UserContainer'


const Content = (props) => {
  return (
    <div className={s.content}>
      <Route path='/profile' render={() => <ProfileContainer/>} />
      <Route path='/dialogs' render={() => <DialogsContainer/>} />
      <Route path='/users' render={() => <UserContainer/>} />

    </div>
  );
}

export default Content;
