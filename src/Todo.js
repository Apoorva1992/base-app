import React, { useEffect, useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';

export default function Todo() {
    const categories = ['Urgent','Medium', 'Low'];

    
    // const [todoArr, setTodoArr] = useState([
    //     {
    //         todo: "Drink Water",
    //         category: "Low",
    //         status: false,
    //     },{
    //         todo: "Do stretching for 10 mins",
    //         category: "Medium",
    //         status: false,
    //     }
    // ]);

    // useEffect(()=>{
        
    //     console.log("local storage updated")
    //     localStorage.setItem('arr', JSON.stringify(todoArr));

    
    
    //},[todoArr]);
    const [todoArr, setTodoArr] = useState([]);
    let [todo, setTodo] = useState({
        todo: "",
        category: "Low",
        status: false,
    });


    const formik = useFormik({
        initialValues: todo,
        onSubmit: (values,{resetForm}) => {
            todoArr.push(values)
            resetForm(values);
            console.log(todoArr,"---todoArr");
            setTodoArr([...todoArr]);
        },
        validationSchema:yup.object({
            todo:yup.string().required('Todo Item is required'),
        })
    });

    const deleteItem = (id) => {
        console.log(id);
        const updatesitems = todoArr.filter((elem,ind)=> {
            return ind !== id;
        });
        setTodoArr(updatesitems);
    }

   
    

    //var get =  JSON.parse(localStorage.getItem('user'));

  return (
    <div className='bg-cyan-500 '>
        <div className='max-w-xs container mx-auto mt-10 text-center'>
            <h1 className='text-2xl'>Todo App</h1><br></br>
        </div>
        <div className='m-10'>
        <form
                onSubmit={formik.handleSubmit}
                className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${formik.errors.todo && formik.touched.todo ? 'border-red-400':'border-blue-400'}`}
            >
                <div className='flex '>
                    <div className='content-center '>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text"   
                            name="todo"
                            id="todo"
                            placeholder='Enter Todo Task'
                            onChange={formik.handleChange}
                            value={formik.values.todo}
                            onBlur={formik.handleBlur}
                        />
                        <span className="text-red-500 text-sm">
                            {formik.errors.todo && formik.touched.todo && formik.errors.todo}
                        </span>
                    </div>
                    <div>
                        <select
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="category"
                            id="category"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                        >
                            {categories.map((e, i) => {
                                return (
                                    <option key={i} value={e}>
                                        {e}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    
                </div>
                <button
                    className="bg-blue-500 my-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >Submit</button>
            </form>
        </div>
        
        <div>

       
            
         {todoArr.map((item,i) => (
             <div key={i} className="flex">
                <div className='px-2'>{item.todo}</div>
                <div className='px-2'>{item.category}</div>
                {item.status ? (<div className='px-2'>True</div>): (<div className='px-2'>False</div>)}
                
                <button onClick={()=> deleteItem(i)}>Delete</button>

             </div>
         ))}
        </div>
       
    </div>
  )
}
