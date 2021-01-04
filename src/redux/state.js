import {rerenderTree} from '../render.js';
const state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'hello world!' },
            { id: 2, message: 'hello world!!' },
            { id: 3, message: 'hello world!!!' },
            { id: 4, message: 'hello world!!!!' },
        ]
    },
    dialogsPage: {
        dialogsData: [
            { name: 'Me', id: 1, avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' },
            { name: 'Mother', id: 2, avaSrc: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/79346901/original/905ada8c81b92fac1867f452e16ef7ec4f97cd92/do-manga-avatars-for-your-social-media-and-streaming-video-channels.png' },
            { name: 'Father', id: 3, avaSrc: 'https://psxteri.files.wordpress.com/2020/05/untitled-3.png?w=474' },
            { name: 'Brother', id: 4, avaSrc: 'https://lh3.googleusercontent.com/proxy/g--_wHFHwEPLH_sbvlAV48AuQ0ldjYnK6TzRviQGai0EvCGCMLzPEqTabXEEbZlvkaiR2kGvF7Yh6iclfZode5qZ6Ff2soDbdZGwBs1IvVi1fLGC1wn7VbRIGiZmu9iWYzGbZc0Cu8sA' },
        ],
        messagesData: [
            { id: 1, text: 'test', pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' },
            { id: 2, text: 'testing', pull: 'right', avaSrc: 'https://lh3.googleusercontent.com/proxy/g--_wHFHwEPLH_sbvlAV48AuQ0ldjYnK6TzRviQGai0EvCGCMLzPEqTabXEEbZlvkaiR2kGvF7Yh6iclfZode5qZ6Ff2soDbdZGwBs1IvVi1fLGC1wn7VbRIGiZmu9iWYzGbZc0Cu8sA' },
            { id: 3, text: 'tests', pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU' }
        ]
    }
}

export const addMessage = (message) => {
    const newMessage = {
        id: 4, text: message, pull: 'left', avaSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrlLIB_yz1NY_TJa367195pdbv-krOKRndw&usqp=CAU'
    }
    state.dialogsPage.messagesData.push(newMessage);
    rerenderTree(state, addMessage);
}

export default state;