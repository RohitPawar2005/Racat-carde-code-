import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './Hook.jsx'
import App from './Form.jsx'
// import App from './Router.jsx'
// import App from './Layout.jsx'
// import App from './Count.jsx'
// import App from './Navbar.jsx'
// import Prop from './Prop.jsx'
// import App from './Tailwind'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
