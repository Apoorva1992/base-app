import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactusPage from './pages/ContactusPage';
import SignupPage from './pages/SignupPage';
import HeaderComponent from './components/HeaderComponent';
import CategoryPage from './pages/CategoryPage';
import ErrorPage from './pages/ErrorPage';
import { useNavigate, Navigate } from 'react-router-dom'
export default function App() {
  const navigate = useNavigate();

  const forward = () =>{
    // navigate('/login');
    navigate(1);
  }
  const backward = () =>{
    // navigate('/login');
    navigate(-1);
  }

  return (
    <div>
      <HeaderComponent/>
      
        <button className='mt-16' onClick={forward}> next</button>
        <button className='mt-16' onClick={backward}> prev</button>
   
        
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route  path='contact' element={<ContactusPage />} />
        <Route  path='signup' element={<SignupPage />} />
        <Route  path='dashboard' element={<HomePage />} />
        <Route  path='category/:categoryName' element={<CategoryPage />} />
        {/* <Route path="*" element={<ErrorPage />}></Route> */}
        <Route path="404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
      <h1>This is the footer</h1>
    </div>
  )
}



// //import { useContext } from 'react';
// import './App.css';
// import Expenses from './Expenses';
// // import Reducer from './Reducer';
// // import CounterReducer from './CounterReducer';
// // import AppContext from './context/AppContext'
// // import FormReducer from './FormReducer';
// // import AComp from './components/AComp';
// //import CComp from './components/CComp';
// function App() {

//   // let contextData = useContext(AppContext);

//   // console.log(contextData);

//   return (
//     <>
//     <div>
//       <Expenses />
//     </div>
      
//       {/* <AComp />
//       <button onClick={()=> {
//           contextData.setUser({
//             username:"max",
//             email:"ap@gmail.com"
//           })
//         }}
//       >Change User Name</button> */}
//     </>
//   );
// }

// export default App;
