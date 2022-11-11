import { GET_NEWS, NEWS_SUCCESS, NEWS_FAILURE } from "./action.types";

const initialState = {
    news:[],
    loading:true,
    error:false,
    errorMessage:""
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS: 
            return{
                ...state,
                loading:true
            }
        case NEWS_SUCCESS:
            return{
                ...state,
                news:action.payload,
                loading:false
            }
        case NEWS_FAILURE:
            return{
                ...state,
                error: true,
                loading:false,
                news:action.payload,
            }
        default:
            return state
    }
}