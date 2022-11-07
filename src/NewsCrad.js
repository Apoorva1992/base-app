import React from 'react'

export default function NewsCrad({article}) {
    console.log(article.urlToImage);

  return (
    <div className='w-1/4 p-2 shadow-md mr-2 mt-4 rounded-md'>
        <img src={article.urlToImage} />
        <h2><a href={article.url} target="_blank">{article.title}</a></h2>
    </div>
  )
}
