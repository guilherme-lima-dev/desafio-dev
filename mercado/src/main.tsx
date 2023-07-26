import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import Register from './pages/register'
import Login from './pages/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  }
])

const root = createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);