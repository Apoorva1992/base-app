import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../actionType";

const initialState = {
    counter:1
}

export const counterReducer = (state = initialState,action) => {
    switch(action.type){ 
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter+1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter-1
            }
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter+1
            }
        case RESET_COUNTER:
            return {
                ...state,
                counter: 0
            }
        default: 
            return state
    }
}