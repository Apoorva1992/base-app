import { GET_NEWS, NEWS_SUCCESS, NEWS_FAILURE } from "../reducers/action.types";

const apiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=92b3ed53d24e45e4a110bf40dfeed3ff'

export const getNews = async (dispatch) => {
    dispatch({
        type: GET_NEWS
    })
    try{
        let response = await fetch(apiURL);
        let data = await response.json();
        console.log(data);
        dispatch({
            type: NEWS_SUCCESS,
            payload: data
        })
    } catch(e) {
        dispatch({
            type:NEWS_FAILURE,
            payload: e.message
        })
        console.log(e)
    }
}