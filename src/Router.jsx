import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx' 
import About from './About.jsx'
import Contact from './Contact.jsx'
import Service from './Service.jsx'
import Home from './Count.jsx'

const Router = () => {
  return (
    <>
      {/* main .jas => <browserrouter><React   /></browserrouter>    */}
      {/* app .jsx rourt.jsx => pouter router */}
      {/* layout .jsx =>  outlet link */}

        <h1> hellop bhbopal </h1>

          <Routes>

            <Route path='/' element={<Layout />}>

              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/contact " element={<Contact />} />
              <Route path="/service" element={<Service />} />
              

            </Route>
          </Routes>


    </>
  )
}

export default Router