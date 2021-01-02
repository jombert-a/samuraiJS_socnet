import s from './Content.module.css'
import Posts from './Posts/Posts'
import Profile from './Profile/Profile'

function Content() {
  return (
    <div className={s.content}>
        <Profile/>
        <Posts/>
    </div>
  );
}

export default Content;
