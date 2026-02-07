import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Body/Home.jsx' 
import AuthLayout from './components/AuthLayout' 

// Import your real components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

// Keep this as a dummy until we build the real Dashboard page
const DummyDashboard = () => (
  <div style={{padding: '40px', textAlign: 'center'}}>
    <h1>Welcome to your EduSpark Dashboard!</h1>
    <p>You have successfully logged in.</p>
  </div>
);

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
          <AuthLayout authentication={true}>
            <DummyDashboard />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
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