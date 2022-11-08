import React, { useState } from 'react'

export default function MealsCard(props) {
    //console.log('article.urlToImage', props);
    // const [mealData, updateMealData] = useState({});
    // mealData
    // console.log(props.meal.strMeal);
    // console.log(props.meal.strSource,"---strSource");
    // console.log(props.meal.strYoutube,"---strYoutube");

  return (
    <div className='w-1/4 p-2 shadow-md mr-2 mt-4 rounded-md'>
        <img src={props.meal.strMealThumb} />
        <h2><a href={props.meal.strSource} target="_blank">Recipe Link: {props.meal.strMeal} </a></h2>
        {/* {props.meals.strYoutube && <h3><a href={props.meals.strYoutube} target="_blank">Youtube Url : {props.meals.strYoutube}</a></h3>} */}
    </div>
  )
}
