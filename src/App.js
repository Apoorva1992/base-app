import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
//import { GET_NEWS } from './redux/reducers/action.types';
import { getNews } from './redux/actions/news.action';
function App() {
  let { news, loading } = useSelector(state=>state.news)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getNews);
    setTimeout(()=> {
      console.log(news)
    },5000)
  },[]);

  return (
    <div >
      {loading ? "...Loading": news.articles.map((article)=> {
        return(
          <h1>{article.title}</h1>
        )
      })}
      {/* {news?.articles.map((article)=> {
        return(
          <h1>{article.title}</h1>
        )
      })} */}
     
    </div>
  );
}

export default App;
