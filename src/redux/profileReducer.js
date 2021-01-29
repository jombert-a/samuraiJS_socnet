import { getProfile } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';

let initialState = {
    profileData: {
        fullName: '',
        photo: '',
        aboutMe: ''
    },
    postsData: [
        { id: 1, message: 'hello world!' },
        { id: 2, message: 'hello world!!' },
        { id: 3, message: 'hello world!!!' },
        { id: 4, message: 'hello world!!!!' },
    ],
    newPostText: '',
    isFetching: false

}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5, message: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.message
            }
        case SET_PROFILE:
            return {
                ...state,
                profileData: {
                    fullName: action.data.fullName,
                    aboutMe: action.data.aboutMe,
                    photo: action.data.photos.large
                }
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
export const addPost = () => ({
    type: ADD_POST
})
export const updateNewPost = (text) => ({
    type: UPDATE_NEW_POST, message: text
})
export const setProfile = (data) => ({
    type: SET_PROFILE, data
})
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const getProfileThunkCreator = (matchUserId, authUserId) => (dispatch) => {
    dispatch(toogleIsFetching(true));
    let userId = matchUserId;
    if (!userId) userId = authUserId;
    getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
            dispatch(toogleIsFetching(false));
        });
}
export default profileReducer;