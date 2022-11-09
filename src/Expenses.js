import React, { useEffect, useReducer, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ExpenseList from './ExpenseList';




const reducer = (state,action) => {
  console.log("reducer function")
  console.log(state,"---state");
  console.log(action,'---action');

  let temAmt = action.payload.value.amount

  if(action.type === 'UPDATETODO'){
    return {
      todoList: [...action.payload.todoList, action.payload.value],
      total:total(action.payload.total, temAmt, action.type)
     }
  }

  if(action.type === 'DELETETODO'){
    //console.log("in delete todod")
    let todoList = action.payload.todoList;
    let todoTask = action.payload.value;
    let newList = todoList.filter((task) => {
        if (task.name !== todoTask.name) {
            return true
        }
        return false
    })
    return {
      todoList: newList,
      total:total(action.payload.total, temAmt, action.type)
    }
  }
  return state;
}

let total = (total,amt,action) => {
  console.log('total is called',total, amt);
  if(action === 'DELETETODO'){
    return total-amt
  }
  if(action === 'UPDATETODO'){
    return total+amt
  }
  
}

export default function ExpenseTracker()  {

  //let [todoList, setTodoList] = useState(localStorage["todoList"] ? JSON.parse(localStorage["todoList"]): [])
  //let [total, setTotal] = useState(0);

  //------ reducer 
  let initialState;
  
  // if(localStorage["todoList"]){
  //     initialState = {
  //       todoList: JSON.parse(localStorage["todoList"]),
  //       total: 0
  //     }
  // }else {
  //     initialState = {
  //       todoList: [],
  //       total: 0
  //     }
  // }
  const [state,dispatch] = useReducer(
    reducer, 
    localStorage["todoList"] ? 
      { todoList : JSON.parse(localStorage["todoList"]).todoList, total:JSON.parse(localStorage["todoList"]).total}
      : 
      { todoList:[],total:0 }
  );
  
  let formik = useFormik({
    initialValues: {
        name: "",
        amount:"",
        category: "",
    },
    onSubmit: function (value) {
        // updateTodo({...value})
        //call reducer 
        dispatch({
          type:"UPDATETODO",
          payload:{
            todoList: state.todoList,
            total: state.total,
            value:value
          }
        })
        formik.resetForm();
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        amount: Yup.string().required("Amount is required"),
        category: Yup.string().required("Category is required"),
    }),
  });

  useEffect(()=> {
    //saveToLocalStorage(state.todoList);
    let newTodo = {
      todoList: state.todoList,
      total: state.total
    }
    saveToLocalStorage(newTodo);

    // let totalValue = state.total;
    // let tot = state.todoList;

    // tot.map((e)=> {
    //   totalValue+= parseInt(e.amount);
    // })
    // state.total = totalValue
    //setTotal(totalValue);
  },[state]); //todoList

  function saveToLocalStorage(list){localStorage["todoList"] = JSON.stringify(list);}

  // function updateTodo(val){
  //   //console.log(val);
  //   setTodoList((prev) => {
  //     return[...prev, val]
  //   })
  //   //console.log(todoList);
  // }

  function deleteTodo(todoTask) {
   
    // let newList = todoList.filter((task) => {
    //     if (task.name !== todoTask.name) {
    //         return true
    //     }
    //     return false
    // })
    // //console.log(todoTask);
    // setTodoList(newList)

    dispatch({
      type:"DELETETODO",
      payload:{
        todoList: state.todoList,
        total: state.total,
        value:todoTask
      }
    })

  }

    
  return (
    <div className='container '>
      <div className='container'>
      
      <h1>Expense Tracker</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='Name'>
          <span>Enter Expense Name</span>
          <input 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name='name'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
          {formik.touched.name && formik.errors.name && (<span className='text-red-500 text-sm'>{formik.errors.name}</span>)}
        </div>
        <div className='Amount'>
          <span>Enter Expense Amount</span>
          <input 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
            name='amount'
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.amount && formik.errors.amount && (<span className='text-red-500 text-sm'>{formik.errors.amount}</span>)}
        </div>
        <div className='Category'>
          <span>Enter Expense Category</span>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='category'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}>
              <option disabled value="">--select--</option>
              <option value="general">General</option>
              <option value="home">home</option>
              <option value="business ">Business</option>
              <option value="other ">Other</option>
          </select>
          {formik.touched.category && formik.errors.category && (<span className='text-red-500 text-sm'>{formik.errors.category}</span>)}
        </div>
        <button 
          className="ml-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center" 
          type='submit'
        >Add</button>
      </form>
      </div>
      
      <div>
        <table>
          <thead className='border-black'>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {/* todoList */}
            {state.todoList.map((todo,id)=> {
              return <ExpenseList
                key={id}
                todo={todo}
                // deleteExpense={deleteTodo}
                deleteExpense={deleteTodo}
                />
            })}
          </tbody>
        </table>
        <hr/>
        <p className='text-center text-xl mt-5 font-bold'>Total : {state.total}</p>

      </div>
    </div>
    
  )
}