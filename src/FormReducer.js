import React, { useEffect, useReducer } from 'react'

const formReducer = (state,action) => {
    switch(action.type){
        case "INPUT_CHANGE":
            return{
                ...state,
                [action.fieldNmae]: action.fieldValue
            }
        case 'EMAIL_VALIDATE':
            return{
                ...state,
                isEmailValidate:action.data
            }
        default:
            return state
    }
    //return state;
}

export default function FormReducer() {
    
    const formInitialState = {
        username:"",
        email:"",
        password:"",
        idEmailValid: true,
    }

    const [formState,formDispatch] = useReducer(formReducer, formInitialState);

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        formDispatch({
            type: "INPUT_CHANGE",
            fieldNmae: e.target.name,
            fieldValue: e.target.value
        })
    }

    const handleEmailBlur = (e)=> {
        // console.log(e.target.value);
        // let result = validateEmail(e.target.value);
        // console.log('Email is valid', result);
        formDispatch({
            type:"EMAIL_VALIDATE",
            data: validateEmail(e.target.value)
        })
    }

    const validateEmail=(e)=> {
        
        // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)){
        //     return (true)
        // }
        //alert("You have entered an invalid email address!")
        return (false)
        
    }

    useEffect(()=> {
        console.log(formState)
    },[formState]);

    return (
        <div className='max-w-md mx-auto shadow-md py-12 px-6 rounded-md mt-4'>
            <form>
                <section className='flex gap-4'>
                    <label>Username</label>
                    <input
                        onChange={(e)=>{handleInputChange(e)}} 
                        type="text"
                        name="username"
                        className='border border-gray-300 h-8 rounded-md focus:border-blue-400'
                        
                    />
                </section>
                <section className='flex gap-4'>
                    <label>Email</label>
                    <input
                        onChange={(e)=>{handleInputChange(e)}} 
                        onBlur={(e)=> {
                            handleEmailBlur(e)
                        }}
                        type="email"
                        name="email"
                        className='border border-gray-300 h-8 rounded-md focus:border-blue-400'
                    />
                    {!formState.isEmailValidate && (<span className='text-red-500 text-sm'>Email is incorrect</span>)}
                </section>
                <section className='flex gap-4'>
                    <label>Password</label>
                    <input
                        onChange={(e)=>
                            {handleInputChange(e)}
                        } 
                        type="password"
                        name="password"
                        className='border border-gray-300 h-8 rounded-md focus:border-blue-400'
                    />
                </section>

            </form>
        </div>
    )
}
