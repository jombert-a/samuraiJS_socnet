import React from 'react';
import User from './User/User';
import s from './Users.module.css';

let Users = props => {
    let usersArray = props.data.data.usersData.map(el => <User data={el} follow={props.data.follow} unfollow={props.data.unfollow} />)
    let pagesCount = Math.ceil(props.data.data.totalUsersCount / props.data.data.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(el => {
                        return <span className={props.data.data.currentPage === el && s.selectedPage}
                            onClick={() => props.data.setCurrentPage(el)}>
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