const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogsData: [
        { name: 'Me', id: 1, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' },
        { name: 'Mother', id: 2, avaSrc: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/79346901/original/905ada8c81b92fac1867f452e16ef7ec4f97cd92/do-manga-avatars-for-your-social-media-and-streaming-video-channels.png' },
        { name: 'Father', id: 3, avaSrc: 'https://psxteri.files.wordpress.com/2020/05/untitled-3.png?w=474' },
        { name: 'Brother', id: 4, avaSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/111554483/original/31e067d65b21bb066c75e7b562fb73ed7283fc6c/create-social-media-avatars-in-minimalist-style.jpg' },
    ],
    messagesData: [
        { id: 1, text: 'test', pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' },
        { id: 2, text: 'testing', pull: 'right', avaSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/111554483/original/31e067d65b21bb066c75e7b562fb73ed7283fc6c/create-social-media-avatars-in-minimalist-style.jpg' },
        { id: 3, text: 'tests', pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' }
    ],
    newMessageText: ''
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4, text: state.newMessageText, pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU'
            }
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.message
            }
        default:
            return state;
    }
}

export const addMessage = () => ({ type: ADD_MESSAGE })
export const updateNewMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE, message: text
})

export default dialogsReducer;