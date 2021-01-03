import s from './Profile.module.css'
import Posts from './Posts/Posts'
const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img src='https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png' />
            <span>{props.name}</span>
            <div>
                <p>{props.birthday}</p>
                <p>{props.sex}</p>
                <p>{props.status}</p>
                <Posts/>
            </div>
        </div>
    );
}

export default Profile;