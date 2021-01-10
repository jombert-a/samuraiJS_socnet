import React from 'react';

let Users = props => {
    if (props.data.usersData.length === 0) {
        debugger
        props.setUsers([
            { id: 1, name: 'ivan', status: 'looking for job', city: 'ufa', followed: true },
            { id: 2, name: 'igor', status: 'not looking for job', city: 'moscow', followed: false },
            { id: 3, name: 'stas', status: 'i am so happy', city: 'kazab', followed: true },
            { id: 4, name: 'dima', status: 'looking for job too', city: 'saint p', followed: false },
            { id: 5, name: 'dima', status: 'looking for job too', city: 'saint p', followed: false }
        ])
    }
    return (
        <div>
            {
                props.data.usersData.map(u =>
                    <div key={u.id}>
                        {u.name}
                    </div>
                )
            }
        </div>
    )

}

export default Users;