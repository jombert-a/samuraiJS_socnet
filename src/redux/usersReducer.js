import { followAPI, getUsers, unfollowAPI } from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = ' UNFOLLOW-USER'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS = 'SET-USERS';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
const TOOGLE_FOLLOWING_PROCESS = 'TOOGLE_FOLLOWING_PROCESS';


let initialState = {
    usersData: [],
    pageSize: 6,
    totalUsersCount: 18,
    currentPage: 1,
    isFetching: false,
    followingProcess: []
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
        case TOOGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingProcess: action.isFollowingProcess
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const getUsersThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(setCurrentPage(pageNumber))
        getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(toogleIsFetching(false));
            });
    }
}
export const followThunkCreator = (userId) => dispatch => {
    dispatch(toogleFollowingProcess(true, userId));
    followAPI(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toogleFollowingProcess(false, userId));
        });

}
export const unfollowThunkCreator = (userId) => dispatch => {
    dispatch(toogleFollowingProcess(true, userId));
    unfollowAPI(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toogleFollowingProcess(false, userId));
        });
}
export const follow = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollowingProcess = (isFollowingProcess, userId) => ({ type: TOOGLE_FOLLOWING_PROCESS, isFollowingProcess, userId })
export default usersReducer;