import s from './Profile.module.css'
import Posts from '../Posts/Posts'

function Profile() {
    return (
        <div className={s.profile}>
            <img src='https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png' />
            <span>name lastname</span>
            <div>
                <p>date of birthday</p>
                <p>male/female</p>
                <p>status</p>
                <Posts />
            </div>
        </div>
    );
}

export default Profile;