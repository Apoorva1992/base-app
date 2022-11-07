import './App.css';
import { useEffect, useState } from 'react';
import Todos from './Todos';
 import News from './News';
//import TodosRehan from './TodosRehan';

function App() {

  // useEffect 
  // Allows to perform side effects in your component 

  let [count,setCount] = useState(0);
  let [name,setName] = useState('John');

  // This is without any dependency 
  //Will run when the component is mounted as well as when componeny is updated
  // useEffect(()=> {
  //   console.log("component is loaded everytime");
  //   //setCount(1); // the component re renders with updated values 
  // });

  // This is with empty dependency array 
  //Will only run when the component is mounted   
  // useEffect(()=>{
  //   console.log("Hey I will only run once");
  // },[])

  // useEffect(()=>{
  //   console.log("I wil only run when name is changed");
  //   //setCount(count++);
  // },[name])
  // useEffect(()=>{
  //   console.log("I wil only run when name is changed");
  //   const interval = setInterval(()=> {
  //     setCount(count++)
  //   },1000);
  //   // componnetWillUnmount- 
  //   //cleanup
  //   return () => clearInterval(interval);  
  //   //setCount(count++);
  // })
  // useEffect(()=> {
  //   console.log("load");
  //   const interval = setInterval(()=>{
  //     setCount((prev)=> prev +1);
  //   },1000);
  //   return () => clearInterval(interval);  
  // })

  return (
    <>
     {/* <News /> */}
    <Todos />
   
    {/* <Todo />
    <div className='text-7xl' >
      {count}
      <p>Hey my name is : {name}</p>
      <button onClick={()=>{
         setName("CHILL");
         console.log("count", count)
       setCount(count+ 1)
      }}>Change Name</button>
    </div> */}
    </>
  );
}

export default App;
