const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = ' UNFOLLOW-USER'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS = 'SET-USERS';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';


let initialState = {
    usersData: [ ],
    pageSize: 6,
    totalUsersCount: 18,
    currentPage: 1,
    isFetching: false
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
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export const follow   = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users)  => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage)  => ({ type: SET_CURRENT_PAGE, currentPage })
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export default usersReducer;