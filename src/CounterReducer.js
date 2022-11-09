import React, {useReducer} from 'react'

const counterReducer = (state,action)=> {
    // if(action.type==='INCREMENT'){
    //     return({
    //         count: state.count + 1
    //     })
    // }
    // if(action.type==='DECREMENT'){
    //     return({
    //         count: state.count - 1
    //     })
    // }
    // if(action.type==='RESET'){
    //     return({
    //         count: 0
    //     })
    // }

    switch (action.type) {
        case "INCREMENT":
        return{
            count: state.count + 1
        }
        case "DECREMENT":
        return{
            count: state.count - 1
        }
        case "RESET":
        return{
            count: 0
        }
        default:
            return state

    }
    //return state;
}

export default function CounterReducer() {
    const initialState = {
        count:0
    }
    const [countState,countDispatch] = useReducer(counterReducer,initialState)
   return (
    <div className='max-w-md mx-auto shadow-lg rounded-md flex flex-col justify-center align-middle text-center mt-8' >
        <h1>{countState.count}</h1>
        <button 
            onClick={()=> {
                countDispatch({
                    type:"INCREMENT"
                })
            }}
            className='bg-blue-500 px-4 py-2 text-white inline-block'>Increment</button>
        <button
            onClick={()=> {
                countDispatch({
                    type:"DECREMENT"
                })
            }}
             className='bg-gray-500 px-4 py-2 inline-block'>Decrement</button>
        <button
            onClick={()=> {
                countDispatch({
                    type:"RESET"
                })
            }}
         className='bg-red-500 px-4 py-2 inline-block'>Reset</button>
    </div>
  )
}
