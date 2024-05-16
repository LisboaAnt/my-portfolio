import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/index.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/index.tsx'
import NoPage from './pages/NoPage/index.tsx'
import Cursos from './pages/Cursos/index.tsx'
import ContactDetails from './routes/ContactDetails.tsx'
import Contact from './routes/Contact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NoPage/>,
    children: [  
      {
        path: "/",
        element: <Home/> 
    },{
      path: "/cursos",
      element: <Cursos/> 
    },{
      path: "/contact/:id",
      element: <ContactDetails/>
    },{
      path: "/contact/",
      element: <Contact/>
    }
  ] 
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)