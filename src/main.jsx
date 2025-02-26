import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
import Error from './Error.jsx'
import AuthProvider from './AuthProvider.jsx';
import Dashboard from './Dashboard.jsx';
import Private from './Private.jsx';
import Details from './Details.jsx';
import Createdata from './userDashboard/Createdata.jsx'
import ViewBiodata from './userDashboard/ViewBiodata.jsx'
import MyFavourite from './userDashboard/MyFavourite.jsx'
import MyRequest from './userDashboard/MyRequest.jsx'
import UserLogout from './userDashboard/UserLogout.jsx'
import ManageUser from './AdminDashboard/ManageUser.jsx'
import ApprovedContact from './AdminDashboard/ApprovedContact.jsx'
import ApprovedPremium from './AdminDashboard/ApprovedPremium.jsx'
import AdminLogout from './AdminDashboard/AdminLogout.jsx'
import AdminDash from './AdminDashboard/AdminDash.jsx'
import Payment from './PaymentMethod/Payment.jsx'
import GotMarried from './userDashboard/GotMarried.jsx'
import SuccessStory from './AdminDashboard/SuccessStory.jsx'
import AdminPrivate from './AdminPrivate.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bioData',
        element: <Biodata></Biodata>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'payment',
        element: <Private><Payment></Payment></Private>
      },
      {

      },
      {
        path: '/dashboard',
        element: <Private> <Dashboard></Dashboard></Private>,
        children: [
          {
            path: 'createData',
            element: <Createdata></Createdata>
          },
          {
            path: 'viewBiodata',
            element: <ViewBiodata></ViewBiodata>
          },
          {
            path: 'myFavourite',
            element: <MyFavourite></MyFavourite>
          },
          {
            path: 'myRequest',
            element: <MyRequest></MyRequest>
          },
          {
            path: 'gotMarried',
            element: <GotMarried></GotMarried>
          },
          {
            path: 'userLogout',
            element: <UserLogout></UserLogout>
          },


          {
            path: 'adminDash',
            element: <AdminPrivate><AdminDash></AdminDash> </AdminPrivate>
          },
          {
            path: 'manageUser',
            element: <AdminPrivate> <ManageUser></ManageUser> </AdminPrivate>
          },
          {
            path: 'approvedContact',
            element: <AdminPrivate><ApprovedContact></ApprovedContact></AdminPrivate>
          },
          {
            path: 'approvedPremium',
            element: <AdminPrivate><ApprovedPremium></ApprovedPremium></AdminPrivate>
          },
          {
            path:'successStory',
            element:<AdminPrivate><SuccessStory></SuccessStory></AdminPrivate>
          },
          {
            path: 'adminLogout',
            element: <AdminLogout></AdminLogout>
          },


        ]
      },
      {
        path: '/details/:id',
        element: <Private><Details></Details></Private>,
        loader: ({ params }) => fetch(` https://find-partner-server.vercel.app/biodata/${params.id}`)
      },
      {
        path: '/payment/:id',
        element: <Private><Payment></Payment></Private>,
        loader: ({ params }) => fetch(` https://find-partner-server.vercel.app/biodata/${params.id}`)
      },
      {
        path: '/premiumDetails/:email',
        element: <Private><Details></Details></Private>,
        loader: ({ params }) => fetch(`https://find-partner-server.vercel.app/premiumDetails/${params.email}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
