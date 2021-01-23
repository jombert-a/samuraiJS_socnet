const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = ' UNFOLLOW-USER'
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersData: [ ],
    pageSize: 4,
    totalUsersCount: 5,
    currentPage: 1
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { 
                ...state, 
                usersData: action.users
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}
export const follow   = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users)  => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage)  => ({ type: SET_CURRENT_PAGE, currentPage })
export default usersReducer;