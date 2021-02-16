export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const ADD_MEMORY = "ADD_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const RECALL_MEMORY ="RECALL_MEMORY"


export const addOne = (input) => {
    return({type:ADD_ONE, payload: input});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return ({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}


export const addToMemory = () =>{
    return({type:ADD_MEMORY})

}


export const memoryClear = () =>{
    return ({type:CLEAR_MEMORY})

}

export const recallMemory = () => {
return ({type:RECALL_MEMORY})

}