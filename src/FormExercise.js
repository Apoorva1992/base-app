import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function FormExercise() {
    const states = ["Delhi", "Punjab", "Haryana", "Uttar Pradesh"]
    const formik = useFormik({
        initialValues: {
            fname:'',
            lname:'',
            address1: '',
            address2: '',
            zipcode: '',
            state:'',
            city: '',
            pno: '',
            shippingmethod: ''
        },
        onSubmit: function(values){
            console.log(values);
        },
        validationSchema: Yup.object({
            fname:Yup.string().required("First Name is required"),
            lname:Yup.string().required("Last Name is required"),
            address1:Yup.string().required('Address Name is required'),
            zipcode: Yup.string().required('Zip code is required'),
            state: Yup.string().required('State is required'),
            city:Yup.string().required('City is required'),
            pno:Yup.string().required('Phone Name is required'),   
        })
    })
  return (
    <div className='bg-gray-100 min-h-screen w-full pt-16'>
         <h1 className='text-xl'>Shipping</h1><br></br>
        <h2 className='text-xl border-b-[3px]'>Shipping Address</h2>
        <form className='max-w-md bg-white mx-auto shadow-md rounded-md p-6' onSubmit={formik.handleSubmit}>
            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> First Name </label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 ${formik.touched.fname && formik.errors.fname  ? 'border-red-400': 'border-blue-400'}`}
                    type='text' 
                    name='fname' 
                    id='fname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.name}
                />
                {formik.touched.fname && formik.errors.fname && (<span className='text-red-500 text-sm'>{formik.errors.fname}</span>)}
            </div>

            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> Last Name </label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 ${formik.touched.lname && formik.errors.lname  ? 'border-red-400': 'border-blue-400'}`}
                    type='text' 
                    name='lname' 
                    id='lname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.name}
                />
                {formik.touched.lname && formik.errors.lname && (<span className='text-red-500 text-sm'>{formik.errors.lname}</span>)}
            </div>

            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> Address Line 1 </label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 ${formik.touched.address1 && formik.errors.address1  ? 'border-red-400': 'border-blue-400'}`}
                    type='text' 
                    name='address1' 
                    id='address1'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.name}
                />
                {formik.touched.address1 && formik.errors.address1 && (<span className='text-red-500 text-sm'>{formik.errors.address1}</span>)}
            </div>

            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> Address Line 2 </label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 border-blue-400`}
                    type='text' 
                    name='address2' 
                    id='address2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.address2}
                />
                {/* {formik.touched.address1 && formik.errors.address1 && (<span className='text-red-500 text-sm'>{formik.errors.address1}</span>)} */}
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className='mb-2'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                        onBlur={formik.handleBlur}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="zipcode"
                        id="zipcode"
                    />
                    <span className="text-red-500 text-sm">
                    {formik.errors.zipcode && formik.touched.zipcode && formik.errors.zipcode}
                    </span>
                </div>
                <div className='mb-2'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          
                    <select
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        onBlur={formik.handleBlur}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="state"
                        id="state"
                    >
                        {states.map((e, i) => {
                        return (
                            <option key={i} value={e}>
                            {e}
                            </option>
                        );
                        })}
                    </select>
          {/* <input
            onChange={formik.handleChange}
            value={formik.values.state}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="state"
            id="state"
          /> */}
           <span className="text-red-500 text-sm">
           {formik.errors.state && formik.touched.state && formik.errors.state}
           </span>
                </div>

            </div>

            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> City</label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 ${formik.touched.city && formik.errors.city  ? 'border-red-400': 'border-blue-400'}`}
                    type='text' 
                    name='city' 
                    id='city'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.name}
                />
                {formik.touched.city && formik.errors.city && (<span className='text-red-500 text-sm'>{formik.errors.city   }</span>)}
            </div>

            <div className='mb-4 flex flex-col'>
                <label className='text-sm'> Phone Number </label>
                <input
                    className={`border h-8 rounded-md mt-1 focus:outline-none px-3 ${formik.touched.pno && formik.errors.pno  ? 'border-red-400': 'border-blue-400'}`}
                    type='text' 
                    name='pno' 
                    id='pno'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={ formik.values.name}
                />
                {formik.touched.pno && formik.errors.pno && (<span className='text-red-500 text-sm'>{formik.errors.pno}</span>)}
            </div>

            <div className='text-center'>
                <button 
                    type='submit' 
                    className='bg-green-500 text-white py-1 rounded-md shadow-md hover:shadow-xl hover:bg-green-600 hover:-translate-y-1 focus-translate-y-1 transition-all'
                >Submit</button>
            </div>
        </form>
            

    </div>
  )
}
