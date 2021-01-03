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
            { name: 'Me', id: 1 },
            { name: 'Mother', id: 2 },
            { name: 'Father', id: 3 },
            { name: 'Brother', id: 4 },
        ],
        messagesData: [
            { id: 1, text: 'test' },
            { id: 2, text: 'testing' },
            { id: 3, text: 'tests' }
        ]
    }
}

export default state;