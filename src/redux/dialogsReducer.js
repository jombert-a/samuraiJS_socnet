const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4, text: state.newMessageText, pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU'
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE, message: text
})

export default dialogsReducer;