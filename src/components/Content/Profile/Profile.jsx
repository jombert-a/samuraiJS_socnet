import s from './Profile.module.css'
import Posts from './Posts/Posts'
import React from 'react';
import userSmallPhoto from '../../../commonImages/userSmallPhoto.png'
import ProfileStatus from './ProfileInfo/ProfileStatus';

const Profile = (props) => {
    let newPostArea = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPost = () => {
        let text = newPostArea.current.value;
        props.updateNewPost(text);
    }
    let pD = props.data.profileData;
    return (
        <div className={s.profile}>
            <div className={s.profileHeader}>
                <div className={s.profileHeader__ava}>
                    <img src={pD.photo ? pD.photo : userSmallPhoto} alt='ava' />
                    <span>{pD.fullName}</span>
                </div>
                <p>About Me: <ProfileStatus setStatusTC={props.setStatusThunkCreator} status={props.data.status}/></p>
            </div>
            <div className={s.profileWrapper}>
                <div className={s.addpost}>
                    <textarea onChange={updateNewPost} ref={newPostArea} value={props.data.newPostText} />
                    <button onClick={addPost}>Post it!</button>
                </div>
                <Posts postsData={props.data.postsData} />
            </div>
        </div>
    );
}

export default Profile;