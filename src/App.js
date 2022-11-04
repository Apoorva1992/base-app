// import './App.css';
import React, { useState } from 'react';
import FormikForm from './FormikForm';
//import FormExercise from './FormExercise';


function App() {
  // let [userForm, setUserForm] = useState({
  //   name: null,
  //   email:"",
  //   password: "",
  //   gender:""
  // });

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('form is submitted');
  //   console.log("Form values are :",   userForm)
  // } 

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   console.log(name);
  //   const value = event.target.value;
  //   setUserForm({...userForm,[name]: value});
  //   console.log(userForm)

  // }
  return (
    // <FormExercise />
    <FormikForm />
    //   <div className="max-w-md mx-auto shadow-md rounded mt-16 p-8">
    //     <form className="flex flex-col" onSubmit={handleSubmit}>
    //       <h2 className="text-center">Enter details to signup </h2>
    //       <lable className="text-xs">Enter your name</lable>
    //       <input 
    //         type='text' 
    //         className='border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500'
    //         value={userForm.name}
    //         name="name"
    //         onChange={handleChange}
    //         // onChange={(e)=> {
    //         //   setUserForm({...userForm, name:e.target.value});
    //         // }}
    //       />

    //       <label className='text-xs' >Enter you email</label>
    //       <input type='email' className='border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500' 
    //         value={userForm.email}
    //         name="email"
    //         onChange={handleChange}
    //         // onChange={(e)=> {
    //         //   setUserForm({...userForm, email:e.target.value});
    //         // }}
    //       />

    //       <lable className='text-xs' >Enter your password</lable>
    //       <input 
    //         type='password' 
    //         className='border border-gray-500 h-8 px-2 rounded-md focus:outline-none focus:border-blue-500'
    //         value={userForm.password}
    //         name="password"
    //         onChange={handleChange}
    //         // onChange={(e)=> {
    //         //   setUserForm({...userForm, password:e.target.value});
    //         // }}
    //       />

    //       <select onChange={handleChange} name="gender">
    //         <option value='Male'>Male</option>
    //         <option value='Female'>Female</option>
    //         <option value='Other'>Other</option>
    //       </select>

    //       <button 
    //         type='submit' 
    //         className='px-6 py-1 bg-blue-600 rounded-md shadow-md inline-block mt-4 text-white'
    //       >Submit
    //       </button>
    //     </form>
    //     <div>
    //       { userForm.name && <p>User name is : {userForm.name}</p>}
    //       <p>User email is : {userForm.email}</p>
    //       <p>User password is : {userForm.password}</p>
    //       <p>User gender is : {userForm.gender}</p>
    //     </div>
    // </div>
  );
}

export default App;
