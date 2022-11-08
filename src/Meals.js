import React, { useEffect, useState } from 'react'
import MealsCard from './MealsCard';
export default function Meals() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
    let [meals, setMeals] = useState([]);
    
    useEffect(()=> {
        fetch(apiUrl)
        .then((response) =>response.json())
        .then((actualData) => {
            setMeals(actualData.meals);
            console.log(meals,"--meals")
        })
        .catch((err)=> {
            console.log(err.message);
        })
    },[]);

    const searchMeal = (e) => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+ e
        //console.log(e,'url', url);
        fetch(url)
        .then((response) =>response.json())
        .then((actualData) => {
            setMeals(actualData.meals);
            console.log(meals,"--meals");
        })
        .catch((err)=> {
            console.log(err.message);
        })
    }

  return (
   <div className='bg-red-300'>
        <div className='container py-10  flex flex-col items-center justify-center '>
                <h1> Search the Recipe of your choice </h1>
                <input className="rounded-lg p-2 mt-4"
                    type="text"
                    // name="inputTodo"
                    // onChange = {(e) => {
                    //     searchMeal(e.target.value);
                    // }}
                    onChange={(e) => {
                        searchMeal(e.target.value);
                    }}
                />
   
            
            
            {/* <button className="bg-blue-600 pl-6 pr-6 text-cyan-50 ml-20 mt-5 rounded-md"
                // onClick={(e) => {
                // e.preventDefault();
                // addTodo();
                // }}
            >
                Add
            </button> */}
        </div>
        <hr/>
        <div className='conatiner mx-auto flex justify-between flex-wrap m-20'>
            {meals.map((meal)=> {
            return (
                <MealsCard 
                    meal={meal}
                    key={meal.idMeal} 
                />
            )
            })}
        </div>
   </div>
  )
}
