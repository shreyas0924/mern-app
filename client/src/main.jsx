import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path:'/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
