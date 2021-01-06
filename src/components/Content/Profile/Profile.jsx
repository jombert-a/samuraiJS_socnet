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

    return (
        <div className={s.profile}>
            <img src='https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png' alt='ava' />
            <span>{props.name}</span>
            <div className={s.profileWrapper}>
                <p>{props.birthday}</p>
                <p>{props.sex}</p>
                <p>{props.status}</p>
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