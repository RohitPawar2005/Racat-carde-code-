import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './Navbar.jsx'
// import Prop from './Prop.jsx'

// import App from './Tailwind'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
     
  </StrictMode>
)
