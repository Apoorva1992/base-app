// import React from 'react'
import { useState } from "react";
//import App from "../App";
import AppContext from './AppContext'


export default function AppState(props) {
    let [user, setUser] = useState({
        username:"John",
        email:"abc@gmail.com"
    })

    //let email="chill@gmail.com"

    let logClick = () => {
        console.log("something was clicked")
    }

  return <AppContext.Provider
  value={{user,setUser,logClick}}
  >{props.children}</AppContext.Provider>
}
