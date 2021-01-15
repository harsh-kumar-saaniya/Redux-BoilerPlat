
const INITIAL_STATE = {
    users: [
        {
            email: "harshvithal1@gmail.com",
            data: []
        },

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.data]
            })
    }
    switch (action.type){
        case "INPUTHANDLER":
            console.log(action.data)
            return ({
                ...state,
                users: [...state.users, action.data]
            })
    }
    return state;
}