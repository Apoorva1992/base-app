import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  //programmatic navigation
  const navigate = useNavigate();

  const handleNavigation = () =>{
    // navigate('/login');
    navigate(-1);
  }

  return (
    <div className='p-20'>
      HomePage
      <button onClick={handleNavigation}>Go to Login Page</button>
    </div>
  )
}
