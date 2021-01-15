

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })

    }
}


const inputHandler = (e) => {
    return (dispatch) => {
        dispatch({ type: "INPUTHANDLER", data: e.target.value })
        // console.log(e.target.value)

    }
}


export { set_data, inputHandler }
