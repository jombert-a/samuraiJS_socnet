import s from './Profile.module.css'
import Posts from './Posts/Posts'
import React from 'react';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/state';

const Profile = (props) => {
    let newPostArea = React.createRef();

    let addPost = () => {
        let action = addPostActionCreater();
        props.dispatch(action);
    }

    let updateNewPost = () => {
        let text = newPostArea.current.value;
        let action = updateNewPostActionCreater(text);
        props.dispatch(action)
    }
    return (
        <div className={s.profile}>
            <img src='https://cdn4.iconfinder.com/data/icons/education-circular-1-1/96/40-512.png' alt='ava' />
            <span>{props.name}</span>
            <div>
                <p>{props.birthday}</p>
                <p>{props.sex}</p>
                <p>{props.status}</p>
                <Posts postsData={props.data.postsData} />
                <div className={s.addpost}>
                    <textarea onChange={updateNewPost} ref={newPostArea} value={props.data.newPostText} />
                    <button onClick={addPost}>Post it!</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;