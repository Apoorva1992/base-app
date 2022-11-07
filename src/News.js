import React, { useEffect, useState } from 'react'
import NewsCrad from './NewsCrad';

export default function News() {
    //https://newsapi.org/docs
    const apiKey = '92b3ed53d24e45e4a110bf40dfeed3ff'

    const apiUrl = 
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=92b3ed53d24e45e4a110bf40dfeed3ff'

    let [articles,setArticles] = useState([]);
    
    useEffect(()=> {
        fetch(apiUrl)
        .then((response)=> response.json())
        .then((actualData) => setArticles(actualData.articles))
        .catch((err)=> {
            console.log(err.message)
        })
    },[])

  return (
    <div className='conatiner mx-auto flex justify-between flex-wrap'>
        {articles.map((article)=> {
            return (<NewsCrad key={article.publishedAt} article={article}  />)
        })}
    </div>
  )
}
