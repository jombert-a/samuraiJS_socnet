import React from 'react';
import s from './User.module.css';
import userSmallPhoto from '../../../../commonImages/userSmallPhoto.png'
import { NavLink } from 'react-router-dom';
import { followAPI, unfollowAPI } from '../../../../api/api';

let User = props => {

    return (
        <div key={props.data.id} className={s.user}>
            <div className={s.photoWrapper}>
                <NavLink to={`/profile/${props.data.id}`}>
                    <img src={`${props.data.photos.small ? props.data.photos.small : userSmallPhoto}`} alt='user' />
                </NavLink>
            </div>
            <div>
                <div>
                    {props.data.name}
                </div>
                {/* <div>
                    {`city: ${props.data.location.city} | country: ${props.data.location.country}`}
                </div> */}
                <div>
                    {props.data.status}
                </div>
                <div>
                    {
                        props.data.followed ?
                            <button disabled={props.followingProcess.some(id => id === props.data.id)} onClick={() => {
                                unfollowAPI(props.data.id, props.toogleFollowingProcess)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(props.data.id)
                                        }
                                        props.toogleFollowingProcess(false, props.data.id); 
                                    });
                            }}>unfollow</button>
                            : <button disabled={props.followingProcess.some(id => id === props.data.id)} onClick={() => {
                                followAPI(props.data.id, props.toogleFollowingProcess)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(props.data.id)
                                        }
                                        props.toogleFollowingProcess(false, props.data.id);  
                                    });
                            }}>follow</button>
                    }
                </div>
            </div>
        </div>

    )

}

export default User;

