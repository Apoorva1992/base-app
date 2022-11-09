import React, { useReducer } from 'react'

const emailReducer = (state, action) => {
    if(action.type === 'CHANGE_EMAIL'){
        return {
            value: action.data,
            isValid:null
        }
    }
    if(action.type === 'UPDATE_EMAIL'){
        //PROCESS HERE
        return {
            value: action.data,
            isValid:null
        }
    }

    return {
        value:"",
        isValid:null
    }
}
export default function Reducer() {
    
    const [emailState, emailDispatch] = useReducer(emailReducer,{
        value:'apoorvagaur@hotmail.com',
        isValid:null
    })

    return (
        <div>
            {emailState.value}
            <button onClick={()=>{
                emailDispatch({
                    type:"UPDATE_EMAIL",
                    data: "test@hotmail.com"
                })
            }}>
            Change to another Email

            </button>
        </div>
    )
}
