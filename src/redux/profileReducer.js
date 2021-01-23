const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    profileData: {
        name: 'robert',
        birthday: '18.08.1999',
        gender: 'male',
        status: 'student'
    },
    postsData: [
        { id: 1, message: 'hello world!' },
        { id: 2, message: 'hello world!!' },
        { id: 3, message: 'hello world!!!' },
        { id: 4, message: 'hello world!!!!' },
    ],
    newPostText: ''
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
        default:
            return state;
    }
}
export const addPost = () => ({ type: ADD_POST })
export const updateNewPost = (text) => ({
    type: UPDATE_NEW_POST, message: text
})

export default profileReducer;