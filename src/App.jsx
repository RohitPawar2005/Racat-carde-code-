import React from "react";
import Img from './assets/aaaaaaaaaaaa.webp'
import './App.css'
import Props from "./Props";

 

const App=()=>{
  return(
    <div>
      <h1>hello bhai </h1>
      <h2 style={{color:'red', fontFamily:'cursive',hight:'40px'}}> i am rohit pawar </h2>
      <img src={Img} alt="image" />
      
      <Props />
    

    </div>
  )
}
export default App





