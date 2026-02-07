import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Body/Home.jsx' 
import AuthLayout from './components/AuthLayout' 

// Import your real components
// import Login from './pages/Login/Login'
// import Signup from './pages/Signup/Signup'
import VideoLibrary from './components/Video/Videolibrary' // Added real component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication={false}>
            <VideoLibrary /> 
          </AuthLayout>
        ),
      },
      {
        path: "/videolibrary",
        element: (
          <AuthLayout authentication={false}>
            <VideoLibrary />
          </AuthLayout>
        ),
      },
      // {
      //   path: "/login",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Login />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/signup",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Signup />
      //     </AuthLayout>
      //   ),
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)