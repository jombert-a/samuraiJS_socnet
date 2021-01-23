import React from 'react';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage } from '../../../redux/usersReducer';
import { connect } from 'react-redux'

class UserContainer extends React.Component {
    componentDidMount() {
        if (this.props.data.usersData.length == 0) {
            this.props.setUsers([
                {
                    id: 1, name: 'ivan', status: 'looking for job', location: { city: 'ufa', country: 'russia' }, followed: true,
                    photoURL: 'https://imgur.com/I80W1Q0.png'
                },
                {
                    id: 2, name: 'igor', status: 'not looking for job', location: { city: 'moscow', country: 'russia' }, followed: false,
                    photoURL: 'https://imgur.com/I80W1Q0.png'
                },
                {
                    id: 3, name: 'stas', status: 'i am so happy', location: { city: 'kazan', country: 'russia' }, followed: true,
                    photoURL: 'https://imgur.com/I80W1Q0.png'
                },
                {
                    id: 4, name: 'dima', status: 'looking for job too', location: { city: 'ufa', country: 'russia' }, followed: false,
                    photoURL: 'https://imgur.com/I80W1Q0.png'
                },
                {
                    id: 5, name: 'dima', status: 'looking for job too', location: { city: 'ufa', country: 'russia' }, followed: false,
                    photoURL: 'https://imgur.com/I80W1Q0.png'
                }
            ]);
        }
    }
    render() {
        return <Users data={this.props}/>
    }
}

let mapStateToProps = state => {
    return {
        data: state.usersPage
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage})(UserContainer)