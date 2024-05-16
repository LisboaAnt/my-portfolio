import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n/index.ts'
import router from './Routes/index.tsx'

import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)