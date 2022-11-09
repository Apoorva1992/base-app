import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

export default function CComp() {

    let contextData = useContext(AppContext)
    //console.log(AppContext);
  return (
    <div>
        {contextData.user.username}
        <br></br>
        {contextData.user.email}
        {contextData.username}
        
    </div>
  )
}
