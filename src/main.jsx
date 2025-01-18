import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import Biodata from './Biodata.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import AuthProvider from './AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
     {
      path: '/bioData',
      element: <Biodata></Biodata>
     },
     {
      path: '/contact',
      element:<Contact></Contact>
     },
     {
      path:'/about',
      element: <About></About>
     },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
