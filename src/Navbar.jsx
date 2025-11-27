import React from "react";
import './Tailwind.css' 
import  img from './assets/aaaaaaaaaaaa.webp'
import { ImAirplane } from "react-icons/im";



const Navbar=()=>{
    // Response => 0.640 px =>by difolt
    // 640 px => sm
    // 768 px => md
    // 1024 px => lg
    // 1280 px => xl
    // 1536 px => 2xl



    return(
      <div>
        <header className=" flex justify-around bg-blue-900 text-white p-4 items-center">

          <img src={img} alt="" className="h-15 w-15   rounded-full" />
         <ul className=" gap-10 text-lg font-semibold hidden sm:flex">
             <li className="p-4 hover:bg-green-700">HOME </li>
             <li className="p-4 hover:bg-green-700">about</li>
             <li className="p-4 hover:bg-green-700"> services</li>
             <li className="p-4 hover:bg-green-700"> contact us</li>
             <li className="p-4 hover:bg-green-700">login</li>
             <li className="p-4 hover:bg-green-700">logout</li>
             <div className=" hover:bg-green-400 p-4 rounded-full ">
             <ImAirplane />

             </div>
             

            
        </ul>
         <div className="gap-100">
             <button className="p-4 bg-green-700 rounded hover:bg-green-800 ">Click Me</button>
             </div>
        </header>
       
        <div>
            <img src={img} alt="" className="h-full w-full" />
        </div>
        
      </div>
    )
}
export default Navbar