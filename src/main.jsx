// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
// //import './index.css' // Ensure your team's CSS is imported


// // import AuthLayout from './components/AuthLayout'
// // import Login from './pages/Login'
// // import Signup from './pages/Signup'
// // import Dashboard from './pages/Dashboard'
// // import AddMaterial from './pages/AddMaterial' // Example for later

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     children: [
// //       {
// //         path: "/",
// //         element: (
// //           <AuthLayout authentication={true}>
// //             <Dashboard />
// //           </AuthLayout>
// //         ),
// //       },
// //       {
// //         path: "/login",
// //         element: (
         
// //           <AuthLayout authentication={false}>
// //             <Login />
// //           </AuthLayout>
// //         ),
// //       },
// //       {
// //         path: "/signup",
// //         element: (
// //           <AuthLayout authentication={false}>
// //             <Signup />
// //           </AuthLayout>
// //         ),
// //       },
// //     ],
// //   },
// // ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//   </React.StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Body/Home.jsx' // Your new Hero section
import AuthLayout from './components/AuthLayout' // Keep logic ready

// Dummy components for testing flow
const DummyDashboard = () => <div style={{padding: '20px'}}>Dashboard Page (Protected)</div>;
const DummyLogin = () => <div style={{padding: '20px'}}>Login Page (Public)</div>;
const DummySignup = () => <div style={{padding: '20px'}}>Signup Page (Public)</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />, // Landing Page (Public)
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication={true}>
            <DummyDashboard />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <DummyLogin />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <DummySignup />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)