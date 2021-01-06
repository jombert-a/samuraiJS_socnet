import s from './Content.module.css'
import { Route } from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import DialogsContainer from './Dialogs/DialogsContainer'


const Content = (props) => {
  return (
    <div className={s.content}>
      <Route path='/profile' render={() => <ProfileContainer store={props.store} />} />
      <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
    </div>
  );
}

export default Content;
