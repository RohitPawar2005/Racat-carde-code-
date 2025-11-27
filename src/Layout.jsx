import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>

     <header>
      <ul> 
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/contact">Contact</Link>  </li> 
        <li> <Link to="/service">Service</Link> </li>
      </ul>
     </header>




    <Outlet />   {/* CHAILD COMPONETN WILL APPEAR HERE */}
    
    
    </>
  )
}

export default Layout