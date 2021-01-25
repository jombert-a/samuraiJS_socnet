import React from 'react';
import User from './User/User';
import s from './Users.module.css';

let Users = props => {
    let usersArray = props.data.usersData.map(el => <User data={el} follow={props.follow} unfollow={props.unfollow} />)
    let pagesCount = Math.ceil(props.data.totalUsersCount / props.data.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.pages}>
                {
                    pages.map(el => {
                        return <span className={props.data.currentPage === el && s.selectedPage}
                            onClick={() => {props.onPageChanged(el)}}>
                            {el}
                        </span>
                    })
                }
            </div>
            <div>
                {usersArray}
            </div>
        </div>
    )

}

export default Users;