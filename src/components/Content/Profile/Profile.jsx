import s from './Profile.module.css'
import Posts from './Posts/Posts'
import React from 'react';

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
                    <img src='https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png' alt='ava' />
                    <span>{pD.name}</span>
                </div>
                <p>{pD.birthday}</p>
                <p>{pD.gender}</p>
                <p>{pD.status}</p>
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