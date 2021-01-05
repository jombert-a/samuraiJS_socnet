const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
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
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.message;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostActionCreater = (text) => ({
    type: UPDATE_NEW_POST, message: text
})

export default profileReducer;